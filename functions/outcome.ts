// /functions/outcome.ts
// Cloudflare Pages Function: deterministic outcome artifact for given inputs.
// IMPORTANT: keep output stable per (intent,event,actor,scope) so edge caching is truthful.

type Env = Record<string, unknown>;

type OutcomeInput = {
  intent: string;
  event: string;
  actor: string;
  scope: string;
};

type Consequences =
  | { access: "allow"; wristband: "issue"; log: "PoP+1" }
  | { access: "deny"; reason: "scope-locked"; log: "audit" }
  | { access: "observe"; log: "noop" };

function normalize(v: string | null | undefined, fallback: string, max = 96): string {
  if (!v) return fallback;
  // Trim + collapse whitespace; cap length to avoid cache key abuse.
  const s = v.trim().replace(/\s+/g, " ");
  return s.length > max ? s.slice(0, max) : s;
}

function allowlist(v: string, allowed: string[], fallback: string): string {
  return allowed.includes(v) ? v : fallback;
}

async function sha256Hex(input: string): Promise<string> {
  const enc = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function corsHeaders(origin: string | null): Record<string, string> {
  // Same-origin is typical, but allow any origin so demos can be embedded.
  // If you later want strictness, swap "*" for a whitelist.
  return {
    "access-control-allow-origin": origin ?? "*",
    "access-control-allow-methods": "GET, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": "86400",
    "vary": "Origin",
  };
}

export async function onRequest({ request }: { request: Request; env: Env }) {
  const url = new URL(request.url);
  const origin = request.headers.get("Origin");

  // Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders(origin),
      },
    });
  }

  if (request.method !== "GET") {
    return new Response(
      JSON.stringify(
        {
          error: {
            code: "method-not-allowed",
            message: "Use GET.",
          },
        },
        null,
        2,
      ),
      {
        status: 405,
        headers: {
          "content-type": "application/json; charset=utf-8",
          ...corsHeaders(origin),
        },
      },
    );
  }

  // Inputs (stateless)
  const intentRaw = normalize(url.searchParams.get("intent"), "observe", 32);
  const eventRaw = normalize(url.searchParams.get("event"), "view", 96);
  const actorRaw = normalize(url.searchParams.get("actor"), "anonymous", 64);
  const scopeRaw = normalize(url.searchParams.get("scope"), "public", 16);

  // Keep the surface stable and predictable (avoid unbounded categories)
  const intent = allowlist(intentRaw, ["observe", "ticket-scan", "refund"], "observe");
  const scope = allowlist(scopeRaw, ["public", "locked"], "public");

  // Event + actor are free-form, but bounded.
  const event = eventRaw;
  const actor = actorRaw;

  const input: OutcomeInput = { intent, event, actor, scope };

  // Deterministic decision string
  const decision = `${intent}::${event}::${actor}::${scope}`;

  // Stable signature (proof-like artifact)
  const signature = await sha256Hex(decision);

  // Consequence rules (simple + visible)
  const consequences: Consequences = (() => {
    if (intent === "ticket-scan" && event.startsWith("gate")) {
      return { access: "allow", wristband: "issue", log: "PoP+1" };
    }
    if (intent === "refund" && scope === "locked") {
      return { access: "deny", reason: "scope-locked", log: "audit" };
    }
    return { access: "observe", log: "noop" };
  })();

  // IMPORTANT: meta must be deterministic if you mark response immutable.
  // Do NOT include timestamps that change per request.
  const artifact = {
    meta: {
      schema: "mm.outcome@0.1.0",
      version: "0.1.0",
      cache_ttl: 86400,
    },
    input,
    decision,
    consequences,
    signature,
  };

  const body = JSON.stringify({ artifact }, null, 2);

  return new Response(body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      // Edge + browser cache (immutable artifact for given inputs)
      "cache-control": "public, max-age=86400, s-maxage=86400, immutable",
      "cdn-cache-control": "max-age=86400",
      ...corsHeaders(origin),
    },
  });
}
