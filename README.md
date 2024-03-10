# Ease Genie

This project is Edge ready (Vercel Edge runtime)

This is a starter project/boilerplate to start out with:

- TRPC
- App directory/router
- Prisma
- Supabase (Auth, Storage, Serverless Queries)
- Tailwind
- Edge Ready
- Umami analytics

It allows us to call database in server components through supabase-js, for client component we are using trpc+prisma due to the superior DX

### Initial Setup

## If you want to develop on local supabase instance, follow the steps below:

Then go to supabase/config.toml file and change your service name.

Start the database:

- supabase start
- pnpm prepare:local

## If you want to develop on remote supabase instance, follow the steps below:

Connect supabase to remote instance:

- supabase link --project-ref <_your_project_id_>
- pnpm prepare:remote

## Common steps

- Fill out environment variables
- Create Secrets on Github

#### If you want to create migrations by hand, go ahead and use this command:

- supabase migration new <_migration_name_>

Then go to supabase/migrations folder and add your SQL there.

#### If you want to make changes with studio, use

- pnpm db:diff <_migration_name_>

## Run these initial commands

Every time you change something on local instance:

```
pnpm prepare:local
```

- If you develop on cloud supabase run:

```
pnpm prepare:remote
```

- Run the project

```
pnpm dev
```

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js app router](https://nextjs.org/docs)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Supabase](https://supabase.com/docs)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

## How do I deploy this?

Follow deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel)
