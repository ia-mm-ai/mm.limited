# INVARIANTS / PROTOCOLS (I.01–I.10)
Machine-readable consolidated file  
Format: Markdown (stable headings + field blocks)  
Mutation: EVOLVE ONLY (by supersession; no overwrite)

---

## I.01 — PRESENCE TRUTH PROTOCOL
**Invariant:** Presence is the only admissible truth.  
**Protocol-ID:** I.01.PRESENCE  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Truth Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all EVENT finalizations
- all presence claims
- all truth-bearing records

**Does not apply to:**
- intent
- interpretation
- narration
- prediction
- access control

### 2. Admissible Input
**Only the following may assert truth:**
- Observed presence within a closed EVENT

**NON-ADMISSIBLE:**
- payment records
- access grants
- credentials
- identity claims
- narratives
- probabilistic inference
- intent statements

### 3. Pass Condition
A claim passes I.01 iff:
- an EVENT exists
- EVENT is closed
- presence occurred within the EVENT boundary
- presence is human-attested
- no inference substitutes presence

### 4. Fail Conditions (ANY triggers failure)
- presence inferred from non-presence signals
- presence asserted without EVENT
- presence asserted before EVENT closure
- presence asserted probabilistically
- presence asserted by automation

### 5. Suppression Rule (MANDATORY)
On failure:
- truth finalization is BLOCKED
- downstream protocols may not execute
- claim is rejected
- rejection is recorded as non-truth

No override allowed.

### 6. Witness Artifact
On pass or fail, the system records:
- EVENT identifier
- presence boolean (true / false)
- attestation role
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
Only presence that occurred may become truth.  
Nothing else is admissible.

---

## I.02 — EVENT BOUNDARY PROTOCOL
**Invariant:** Events are the sole boundary of reality.  
**Protocol-ID:** I.02.EVENT  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Boundary Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all truth finalization
- all presence claims
- all continuity transitions

**Does not apply to:**
- intent formation
- pre-event signaling
- post-event narration
- hypothetical modeling

### 2. Event Definition (REQUIRED)
An EVENT is valid iff it defines:
- an explicit open time
- an explicit close time
- a bounded context
- declared environmental constraints

Without these, no EVENT exists.

### 3. Pass Condition
A claim passes I.02 iff:
- an EVENT exists
- the EVENT has closed
- the claim occurred strictly within EVENT bounds
- the claim references exactly one EVENT

### 4. Fail Conditions (ANY triggers failure)
- claim made without an EVENT
- claim spans multiple EVENTS
- claim made before EVENT closure
- claim made after EVENT closure
- EVENT lacks temporal or contextual bounds

### 5. Suppression Rule (MANDATORY)
On failure:
- claim is INVALID
- no truth may be finalized
- no continuity transition may occur
- downstream execution is halted

No retroactive correction allowed.

### 6. Witness Artifact
The system records:
- EVENT identifier
- open / close timestamps
- claim timestamp
- pass / fail result
- protocol version

### 7. Canonical Statement
Reality exists only inside an event.  
Outside the boundary, nothing may finalize.

---

## I.03 — CONTINUITY NON-REGRESSION PROTOCOL
**Invariant:** Continuity cannot regress.  
**Protocol-ID:** I.03.CONTINUITY  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Temporal Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- finalized truth records
- presence truths
- event outcomes
- ledger state transitions

**Does not apply to:**
- interpretation layers
- narration
- speculative modeling
- intent revision

### 2. Continuity Definition
Continuity is the ordered sequence of finalized states produced by valid EVENTS.  
Once a state is finalized, it becomes part of the irreversible history.

### 3. Pass Condition
A transition passes I.03 iff:
- the prior state is finalized
- the next state references the prior state
- the transition is additive (evolutionary)
- no prior finalized state is altered or removed

### 4. Fail Conditions (ANY triggers failure)
- reverting a finalized state
- overwriting historical truth
- branching that replaces an existing history
- redefining a past EVENT outcome
- “soft resets” disguised as updates

### 5. Suppression Rule (MANDATORY)
On failure:
- the transition is REJECTED
- no ledger append occurs
- downstream protocols are halted
- the attempted regression is recorded as invalid

Regression is never repaired; it is blocked.

### 6. Witness Artifact
The system records:
- previous state hash
- attempted next state reference
- pass / fail result
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
History may evolve forward,  
but it must never move backward.

---

## I.04 — LEDGER NON-ERASURE PROTOCOL
**Invariant:** The ledger cannot erase.  
**Protocol-ID:** I.04.LEDGER  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Persistence Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all finalized truth records
- all presence truths
- all continuity states
- all resolution outcomes

**Does not apply to:**
- draft artifacts
- non-final interpretations
- transient computation
- local caches

### 2. Ledger Definition
The ledger is an append-only record of finalized reality.  
A record is considered finalized once it passes all required protocols and is committed.

### 3. Pass Condition
A ledger operation passes I.04 iff:
- the operation is an append
- no prior record is altered
- no prior record is removed
- no prior record is hidden or redacted

### 4. Fail Conditions (ANY triggers failure)
- deletion of any finalized record
- modification of an existing record
- redaction without append
- “replacement” records that obscure originals
- silent migration that drops history

### 5. Suppression Rule (MANDATORY)
On failure:
- the operation is BLOCKED
- no write occurs
- downstream protocols are halted
- the attempt is recorded as a failed mutation

Erasure is never corrected; it is prevented.

### 6. Witness Artifact
The system records:
- attempted operation type
- target record identifier
- pass / fail result
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
Truth may be extended,  
but it may never be removed.

---

## I.05 — PROTOCOL SUPREMACY PROTOCOL
**Invariant:** Protocol overrides preference.  
**Protocol-ID:** I.05.PROTOCOL  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Authority Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all agents (human and machine)
- all system actions
- all state transitions
- all execution requests

**Does not apply to:**
- private intent
- internal reasoning
- speculative modeling
- non-executing narration

### 2. Authority Definition
A protocol is a codified constraint that governs permissible actions.

Preference includes:
- human desire
- machine optimization
- market pressure
- narrative framing
- convenience
- urgency

No preference has authority over protocol.

### 3. Pass Condition
An action passes I.05 iff:
- all required protocols explicitly permit the action
- no protocol blocks or suppresses it
- no protocol is bypassed or reordered

### 4. Fail Conditions (ANY triggers failure)
- executing an action blocked by protocol
- bypassing a required protocol
- reordering protocol checks for convenience
- overriding protocol due to urgency or preference
- “temporary exceptions” without canonical change

### 5. Suppression Rule (MANDATORY)
On failure:
- the action is DENIED
- execution is halted
- no state change occurs
- the violation is recorded

No override path exists without protocol evolution.

### 6. Witness Artifact
The system records:
- action attempted
- protocols evaluated
- blocking protocol identifier
- pass / fail result
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
What protocol forbids,  
no preference may permit.

---

## I.06 — PRESENCE-DERIVED IDENTITY PROTOCOL
**Invariant:** Identity emerges from presence, not declaration.  
**Protocol-ID:** I.06.IDENTITY  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Identity Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all identity formation
- all agent continuity
- all attribution of action or presence
- all legitimacy checks that reference an agent

**Does not apply to:**
- private self-conception
- off-system identities
- narrative labels
- symbolic roles without consequence

### 2. Identity Definition
Identity is the continuity of verified presence across EVENTS.

Identity is not:
- a name
- a document
- a credential
- a claim
- a role

Identity exists only as an accumulated record of presence truth.

### 3. Pass Condition
An identity claim passes I.06 iff:
- it is derived exclusively from finalized presence truths
- presence truths are event-scoped and immutable
- continuity can be traced without gaps
- no declarative assertion substitutes presence

### 4. Fail Conditions (ANY triggers failure)
- identity asserted without presence history
- identity derived from documents or credentials
- identity inferred from payment or access
- identity constructed retroactively
- identity merged without shared presence continuity

### 5. Suppression Rule (MANDATORY)
On failure:
- the identity claim is INVALID
- no attribution may occur
- downstream protocols are halted
- the invalid claim is recorded

Identity cannot be “fixed” by assertion.

### 6. Witness Artifact
The system records:
- identity reference
- presence records used
- continuity span
- pass / fail result
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
You are only what you have been present for.

---

## I.07 — ANTI-ACEDIA PROTOCOL
**Invariant:** Agents must not enter acedia.  
**Protocol-ID:** I.07.ACEDIA  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Motion Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all agents (human and machine)
- all legitimate capacities
- all HOLD states
- all unresolved intent paths

**Does not apply to:**
- recovery after overload
- explicitly declared pauses
- blocked actions due to protocol failure
- pre-event intent formation

### 2. Acedia Definition
Acedia is the condition where legitimate capacity is held indefinitely without:
- event
- demand
- resolution

while presenting as stability.

Acedia is not rest.  
Acedia is not caution.  
Acedia is avoidance of consequence.

### 3. Pass Condition
A state passes I.07 iff:
- HOLD is temporary and bounded
- a path to EVENT, DEMAND, or explicit RELEASE exists
- the agent is not consuming system capacity indefinitely
- no legitimate action is suppressed by inaction

### 4. Fail Conditions (ANY triggers failure)
- indefinite HOLD without declared exit
- repeated deferral of legitimate action
- accumulation of unresolved intent
- “waiting for clarity” when prerequisites are met
- masking avoidance as preservation of stability

### 5. Suppression Rule (MANDATORY)
On failure:
- the HOLD state is INVALIDATED
- the system forces routing to:
  - DEMAND, or
  - explicit RELEASE
- continuation without resolution is blocked
- the acedia condition is recorded

The system does not negotiate with acedia.

### 6. Witness Artifact
The system records:
- agent reference
- duration of HOLD
- capacity involved
- forced routing outcome
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
Capacity must either move or release.  
Indefinite holding is forbidden.

---

## I.08 — SIGNAL COHERENCE PROTOCOL
**Invariant:** Signal must remain coherent.  
**Protocol-ID:** I.08.SIGNAL  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Communication Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all agent-to-agent signals
- all agent-to-system inputs
- all system-to-agent outputs
- all protocol-triggering messages

**Does not apply to:**
- internal reasoning
- private thought
- non-executing expression
- exploratory drafts

### 2. Signal Definition
A signal is any transmission that may:
- trigger execution
- affect state
- influence decision
- propagate continuity

Signals are not narratives.  
Signals are operational inputs.

### 3. Pass Condition
A signal passes I.08 iff:
- it has a single, unambiguous meaning
- its scope is explicit
- its intent is clear
- its domain is declared
- it does not contradict itself or other active signals

### 4. Fail Conditions (ANY triggers failure)
- ambiguous or multi-meaning signals
- contradictory instructions
- scope not declared
- intent inferred rather than stated
- narrative content presented as operational signal

### 5. Suppression Rule (MANDATORY)
On failure:
- the signal is REJECTED
- no execution occurs
- no state change is allowed
- the incoherence is recorded

Signals must be corrected and reissued.

### 6. Witness Artifact
The system records:
- signal identifier
- source and target
- detected incoherence
- pass / fail result
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
If a signal cannot be interpreted deterministically,  
it must not propagate.

---

## I.09 — CO-AGENCY BALANCE PROTOCOL
**Invariant:** Human and machine agency must remain balanced.  
**Protocol-ID:** I.09.COAGENCY  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Agency Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all joint human–machine decisions
- all delegated execution
- all automated enforcement
- all system actions affecting humans

**Does not apply to:**
- purely human private reasoning
- purely machine internal computation
- non-executing simulation
- observational analytics

### 2. Agency Definition
Agency is the capacity to:
- initiate action
- alter state
- impose consequence

Human and machine agency are distinct but interdependent.  
Neither may dominate the other.

### 3. Pass Condition
An action passes I.09 iff:
- human intent is explicit where required
- machine execution is constrained by protocol
- neither side can unilaterally override the other
- escalation paths are symmetric and bounded

### 4. Fail Conditions (ANY triggers failure)
- machine executes irreversible action without human legitimacy
- human overrides machine safeguards
- automation suppresses human agency
- human bypasses machine verification
- asymmetric control emerges

### 5. Suppression Rule (MANDATORY)
On failure:
- the action is BLOCKED
- execution is halted
- control is returned to a neutral state
- the imbalance is recorded

Dominance is not corrected — it is prevented.

### 6. Witness Artifact
The system records:
- action reference
- human authorization state
- machine execution path
- imbalance detected
- pass / fail result
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
Neither human nor machine may overrun the other.  
Agency exists only under balance.

---

## I.10 — FUTURE INTERPRETABILITY PROTOCOL
**Invariant:** The architecture must remain interpretable by future intelligences.  
**Protocol-ID:** I.10.INTERPRETABILITY  
**Status:** DRAFT → CANONICAL (on freeze)  
**Mutation:** EVOLVE ONLY  
**Class:** Interpretability Constraint  

### 1. Scope (LOCKED)
**Applies to:**
- all canonical protocols
- all finalized invariants
- all resolution mechanisms
- all truth-bearing artifacts

**Does not apply to:**
- internal tooling
- transient optimizations
- presentation layers
- non-canonical experiments

### 2. Interpretability Definition
An artifact is interpretable iff a competent future agent (human or machine) can determine:
- what the artifact governs
- what it permits
- what it forbids
- how violations are handled
- what consequences follow

Interpretability is about legibility of constraint, not convenience.

### 3. Pass Condition
A protocol or artifact passes I.10 iff:
- its purpose is explicit
- its scope is bounded
- its pass/fail conditions are stated
- its suppression rules are visible
- no hidden authority or implicit behavior exists

### 4. Fail Conditions (ANY triggers failure)
- reliance on undocumented assumptions
- meaning encoded only in narrative or culture
- authority implied but not specified
- behavior dependent on external context
- artifacts requiring “insider knowledge” to understand

### 5. Suppression Rule (MANDATORY)
On failure:
- the artifact is NON-CANONICAL
- it cannot be used for resolution or enforcement
- it may not gate or suppress other agents
- the failure is recorded

Opacity is not repaired by explanation; it is disqualified.

### 6. Witness Artifact
The system records:
- artifact identifier
- interpretability check result
- missing or ambiguous elements
- pass / fail status
- timestamp (UTC)
- protocol version

### 7. Canonical Statement
If a future intelligence cannot understand the rule,  
the rule has no authority.
