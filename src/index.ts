/**
 * Entry point for the Kora Rent Reclaim Bot
 * This file is intended to be executed periodically (e.g. via cron)
 */

import { connectToSolana } from "./solana";
import { monitorSponsoredAccounts } from "./monitor";
import { logInfo } from "./logger";

async function main() {
  logInfo("Starting Kora Rent Reclaim Bot...");

  const connection = connectToSolana();

  await monitorSponsoredAccounts(connection);

  logInfo("Rent reclaim cycle completed.");
}

// Execute bot
main().catch((error) => {
  console.error("Bot execution failed:", error);
});
