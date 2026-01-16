import { Connection, PublicKey } from "@solana/web3.js";
import { logInfo } from "./logger";
import sponsoredAccounts from "../data/sponsoredAccounts.json";

/**
 * Checks each sponsored account's status and logs if reclaimable
 */
export async function monitorSponsoredAccounts(connection: Connection) {
  logInfo(`Monitoring ${sponsoredAccounts.length} sponsored accounts...`);

  for (const accountStr of sponsoredAccounts) {
    try {
      const pubkey = new PublicKey(accountStr);
      const accountInfo = await connection.getAccountInfo(pubkey);

      if (accountInfo === null) {
        logInfo(`Account ${accountStr} is closed or does not exist.`);
        // Here you would add reclaim logic
      } else {
        logInfo(`Account ${accountStr} is active with ${accountInfo.lamports} lamports.`);
      }
    } catch (error) {
      logInfo(`Failed to process account ${accountStr}: ${error}`);
    }
  }
          }
