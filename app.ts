import type { Serve } from "bun";

/**
 * Provide a configurable app module.
 */
export default {
  fetch() {
    // console.log(Symbol.for("BunServerHMR"));
    // console.log(globalThis);
    return new Response("Welcome to Bun!");
  },
} as Serve;
