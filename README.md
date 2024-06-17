# Guestbook

A guestbook that could be signed by an authenticated user and viewed by other guests.

Inspired by [Lee Robinson's Guestbook](https://leerob.io/guestbook).

## Features

- Authentication: [Auth.js](https://authjs.dev/)
- Database: [Xata](https://xata.io/)
- Color scheme: [Nord](https://www.nordtheme.com/)
- Toast notifications: [Sonner](https://sonner.emilkowal.ski/)

## Setting up

### Install the dependencies

```bash
pnpm install
```

### Database

Make sure to [initialize Xata](https://xata.io/docs/getting-started/nextjs) first.

After initializing Xata, you should have the following environmental variables added to your `.env.local`:

- XATA_BRANCH=
- XATA_API_KEY=

### Authentication

Follow [the guide](https://authjs.dev/guides/configuring-github) to configure OAuth with GitHub.

You should have the following environmental variables set:

- AUTH_SECRET=
- AUTH_GITHUB_ID=
- AUTH_GITHUB_SECRET=

### Start the application

Run the development server:

```bash
pnpm dev
```

or build the application:

```bash
pnpm build && pnpm start
```

## Resources

- [Xata Database](https://xata.io/docs/getting-started/nextjs)
- [OAuth with GitHub](https://authjs.dev/guides/configuring-github)
