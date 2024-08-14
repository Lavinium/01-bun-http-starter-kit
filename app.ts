import type { Serve } from "bun";

export default {
  fetch() {
    return new Response("Welcome to Bun!");
  },
} as Serve;
