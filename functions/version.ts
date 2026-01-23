export async function onRequest() {
  const version = "MM-MENTAL-MODEL 1.12";

  const payload = {
    name: "mm.limited",
    version,
    environment: "production",
    // Cloudflare Pages injects this automatically
    commit: (process.env.CF_PAGES_COMMIT_SHA ?? null),
    branch: (process.env.CF_PAGES_BRANCH ?? null),
    deployed_at: new Date().toISOString(),
    posture: "read-only",
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
