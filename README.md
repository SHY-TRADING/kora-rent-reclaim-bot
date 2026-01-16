# Automated Rent Reclaim Bot for Kora Operators

## Overview
Kora allows applications to sponsor account creation and transactions on Solana, improving user experience by abstracting away SOL fees. However, when accounts are created through sponsorship, SOL is locked as rent. Over time, many of these accounts become inactive or are closed, leaving rent SOL idle and unreclaimed.

This project introduces an automated bot that monitors Kora-sponsored accounts and safely reclaims locked rent SOL back to the operator treasury when accounts are no longer needed.

The goal is to help Kora operators recover silent capital loss while maintaining safety, transparency, and auditability.

---

## How Kora Sponsorship Works
When a Kora node sponsors an account creation:
- The operator pays SOL to create the account
- A portion of SOL is locked as rent to keep the account alive on Solana
- This rent remains locked until the account is closed

If the account becomes inactive or is no longer required, the rent can be reclaimed by closing the account.

---

## The Problem
Kora operators often sponsor thousands of accounts. Tracking which accounts are still active versus reclaimable is difficult and usually done manually or not at all. This leads to:
- Accumulated locked rent SOL
- Silent capital loss over time
- Lack of visibility into rent usage

---

## Solution
This bot automates the rent reclaim process by:
- Monitoring known Kora-sponsored accounts
- Detecting when an account is closed or eligible for cleanup
- Safely reclaiming the locked rent SOL
- Logging every reclaim action with clear reasoning

---

## Features
- Automated monitoring of sponsored accounts
- Safe rent reclaim logic with account validation
- Dry-run mode for safety
- Clear logs explaining reclaim decisions
- Designed for cron-based execution

---

## Technical Approach

### Account Monitoring
The bot connects to Solana using the JSON RPC API and inspects the state of sponsored accounts. Accounts are evaluated based on:
- Account existence
- Lamport balance
- Rent-exemption status

### Rent Reclaim Logic
If an account is determined to be closed or no longer rent-exempt, the bot triggers a reclaim transaction that transfers the locked rent back to the operator treasury.

Safety checks are applied to avoid reclaiming active accounts.

---

## Prototype & Environment
This project is designed as a working prototype targeting **Solana devnet**.

Due to the absence of direct access to a live Kora operator environment, sponsored accounts are simulated using predefined account lists. The reclaim flow follows real Solana rent mechanics and can be adapted to production environments with minimal changes.

---

## Project Structure
kora-rent-reclaim-bot/
├── src/
│   ├── index.ts
│   ├── solana.ts
│   ├── monitor.ts
│   ├── reclaim.ts
│   └── logger.ts
├── data/
│   └── sponsoredAccounts.json
├── README.md
├── package.json
├── tsconfig.json
└── .env.example
## How to Run (Devnet)

```bash
npm install
npm run start


For a detailed explanation of the bot’s design and operation, see [DEEP_DIVE.md](./DEEP_DIVE.md)
