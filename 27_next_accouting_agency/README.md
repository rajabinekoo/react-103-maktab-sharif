## Design

https://www.figma.com/file/fVQplumCaAa3WCsx9SPWhi/Accounting-Platform

## Configs

Create account in the link below:
https://pockethost.io/

Then insert pocketbase username, password and server url in the next.config.mjs file.

### Collections

You should use these collections:

- users (fields: [username: string, password: string, isAdmin: boolean])
- tokens (fields: [userId: string, sessionKey: string, expiration: number])
- companies (fields: [name: string, location: string, founder: string, foundationDate: string | Date, employeesNumber: number])
- ledgerRecords (fields: [companyId: string, title: string, description: string, credit: number, debit: number])

### Senarios

Admin actor:

- Can login with username and password that IT manager inserted in the pocketbase.
- Can CRUD on users accounts.
- Can only see companies and ledgers.

Accountant actor:

- Can login with username and password that admin was made.
- Can CRUD on companies (Companies are not same with name factor, In other words, accountants data is isolated from others).
- Can CRUD on company ledger.
- Accountant needs to take report: total debits, total credits and subtract of them.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
