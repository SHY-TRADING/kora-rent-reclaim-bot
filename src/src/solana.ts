import { Connection, clusterApiUrl } from "@solana/web3.js";

/**
 * Creates and returns a Solana connection
 * Defaulting to devnet for safety
 */
export function connectToSolana(): Connection {
  const rpcUrl = clusterApiUrl("devnet");
  return new Connection(rpcUrl, "confirmed");
}
