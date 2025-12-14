# Zero-env ⚡

**The Runtime Config Validator for JS & Node.js.**
Zero-env Setup. Zero-env Schema. Auto-detects missing keys.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## The Problem

Using `process.env` directly is dangerous. If you forget a variable, your app crashes randomly at 3 AM.
Libraries like `zod` are great, but they require writing schemas, types, and config files.

## The Solution

**Zero-env** wraps your environment in a smart Proxy.

- **0 Config:** No schema files. No setup.
- **Auto-Load:** Automatically loads `.env` (bundles `dotenv`).
- **Fail Fast:** Crashes **instantly** with a descriptive error if you access a missing variable.

---

## Installation

```bash
npm i @aritra_debnath/zero-env
```

---

## Usage

### 1. Create your `.env` file

```env
DATABASE_URL=postgres://localhost:5432/mydb
API_KEY=secret_123
```

### 2. Import and Use

Instead of `process.env`, import `Zero-env`.

```javascript
import env from "@aritra_debnath/zero-env";

// ✅ Works perfectly
connectToDb(env.DATABASE_URL);

// ❌ CRASHES IMMEDIATELY
// You forgot to add 'STRIPE_KEY' to your .env file
const payment = new Stripe(env.STRIPE_KEY);
```

### The Error Message

If you access a missing key, the app throws a fatal error intentionally:

```text
Error: ❌ CRASH: Missing Environment Variable
You tried to access 'env.STRIPE_KEY' but it is not defined in your .env file.
```

---

## TypeScript Support

Works out of the box. No manual typing required.
The package exports a default object where keys are treated as `string`.

```typescript
import env from "@aritra_debnath/zero-env";

const key: string = env.API_KEY; // Type inferred as string
```

---

## FAQ

**Does this work with Next.js / Vite?**
Yes, but remember that client-side bundlers often replace `process.env.VAR` at build time. This package is designed primarily for **Node.js runtimes** (Backend, API routes, Scripts).

**Why does console.log(env) look empty?**
Because it is a `Proxy`. It doesn't hold data itself; it intercepts requests to `process.env`. If you want to see all variables, use `console.log(process.env)`.

---

## License

MIT
