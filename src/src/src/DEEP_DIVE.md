# Deep Dive: Automated Rent Reclaim Bot for Kora Operators

## Introduction

Kora allows apps to sponsor account creation on Solana by locking rent SOL. Over time, many sponsored accounts become inactive or closed, causing silent capital loss if rent is not reclaimed.

This bot automates monitoring sponsored accounts and safely reclaims locked rent SOL, helping Kora operators recover funds without manual work.

## How Kora Sponsorship Works

- Operators pay SOL to create accounts for users
- A portion of SOL is locked as rent to keep accounts alive
- Rent is reclaimed when accounts close or are inactive

## Bot Design

The bot uses Solana's JSON RPC API to:

- Monitor a list of sponsored accounts
- Check account existence and lamport balance
- Detect closed or reclaimable accounts
- Trigger reclaim transactions (simulated in this prototype)
- Log actions clearly for auditability

## Safety and Reliability

- Only operates on known sponsored accounts (whitelisted)
- Dry-run simulation mode to avoid unintended reclaim
- Clear logs for every action
- Uses Solana devnet for testing

## How to Run

1. Clone the repo  
2. Install dependencies with `npm install`  
3. Configure environment variables in `.env`  
4. Run `npm run start` to start the bot

## Limitations

- Uses mock sponsored accounts for demonstration  
- Does not send real transactions (simulated reclaim)  
- No frontend interface

## Future Improvements

- Integration with real Kora APIs  
- Real transaction sending with secure key management  
- Alerting via Telegram or email  
- Dashboard for monitoring rent usage  

---

## Conclusion

This bot provides a safe, clear, and practical way for Kora operators to automate rent reclaim, reducing silent capital loss and increasing operational clarity.
