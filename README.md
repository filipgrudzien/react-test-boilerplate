# React + TypeScript + Vite + Jest

Minimal starter for frontend interview practice.

## Stack

- React
- TypeScript
- Vite
- Jest
- React Testing Library
- @testing-library/jest-dom
- @testing-library/user-event
- jsdom

## Scripts

- `npm run dev` - run Vite dev server
- `npm run build` - type-check and build
- `npm test` - run Jest tests once
- `npm run test:watch` - run Jest in watch mode

## Testing setup

- Jest runs in `jsdom` environment.
- `@testing-library/jest-dom` is loaded globally via `jest.setup.ts`.
- Test files `*.test.ts` and `*.test.tsx` are supported by TypeScript config.
