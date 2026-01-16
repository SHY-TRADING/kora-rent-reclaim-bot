import { Connection, PublicKey } from "@solana/web3.js";
import { logInfo } from "./logger";
import sponsoredAccounts from "../data/sponsoredAccounts.json";
import { reclaimRent } from "./reclaim";

/**
 * Checks each sponsored account's status and reclaims rent if applicable
 */
export async function monitorSponsoredAccounts(connection: Connection) {
  logInfo(`Monitoring ${sponsoredAccounts.length} sponsored accounts...`);

  for (const accountStr of sponsoredAccounts) {
    try {
      const pubkey = new PublicKey(accountStr);
      const accountInfo = await connection.getAccountInfo(pubkey);

      if (accountInfo === null) {
        logInfo(`Account ${accountStr} is closed or does not exist. Attempting reclaim.`);
        await reclaimRent(pubkey);
      } else {
        logInfo(`Account ${accountStr} is active with ${accountInfo.lamports} lamports. No reclaim needed.`);
      }
    } catch (error) {
      logInfo(`Failed to process account ${accountStr}: ${error}`);
    }
  }
}
