# Typesaurus Playground

## Getting Started

After cloning the repo, to start the server:

```bash
npm i
npm start
```

It will start the server at [`localhost:3000`](http://localhost:3000).

The demo function is served at [`localhost:5000/typesaurus-playground/us-central1/seed`](http://localhost:5000/typesaurus-playground/us-central1/seed).

## Demo

The playground contains a few quick demos:

1. DB setup and actions in `src/db/index.ts`
2. Usage with a Preact in `src/web/app.tsx`
3. Usage with Functions in `src/functions/seed.ts`
4. Security rules in `src/db/security.ts` (to generate the rules, run `npm run security`)
