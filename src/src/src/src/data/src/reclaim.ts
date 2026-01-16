import { PublicKey } from "@solana/web3.js";
import { logInfo } from "./logger";

/**
 * Simulates reclaiming rent from a closed account
 * In production, this would send a transaction to reclaim locked SOL
 */
export async function reclaimRent(account: PublicKey) {
  // Simulate delay for transaction
  await new Promise((resolve) => setTimeout(resolve, 1000));

  logInfo(`Reclaimed rent from account ${account.toBase58()}.`);
}
