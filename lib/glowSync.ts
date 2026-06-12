// Captured once at module evaluation time on the client.
// All glow-pulse animations reference this to stay in phase with each other.
export const PAGE_LOAD_TIME =
  typeof window !== "undefined" ? Date.now() : 0;

const PERIOD_MS = 3000;    // must match glow-pulse duration
const NAVBAR_DELAY_MS = 800; // must match the navbar's animation-delay: 0.8s

/**
 * Returns an `animation-delay` value (negative) that places a newly-mounted
 * element at the same glow-pulse phase as the navbar indicator, which started
 * at PAGE_LOAD_TIME with an 0.8s delay.
 */
export function getGlowDelay(): string {
  if (typeof window === "undefined") return `${NAVBAR_DELAY_MS / 1000}s`;
  const elapsed = Date.now() - PAGE_LOAD_TIME - NAVBAR_DELAY_MS;
  const phase = ((elapsed % PERIOD_MS) + PERIOD_MS) % PERIOD_MS;
  return `${-(phase / 1000).toFixed(3)}s`;
}
