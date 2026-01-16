/**
 * Simple logger utility for consistent logs
 */

export function logInfo(message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[INFO] [${timestamp}] ${message}`);
}

export function logError(message: string) {
  const timestamp = new Date().toISOString();
  console.error(`[ERROR] [${timestamp}] ${message}`);
}
