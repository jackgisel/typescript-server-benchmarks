# typescript-server-benchmarks

## Use Case

What run time (Node, Bun or Deno) and web framework (Express, Oak, Elysia) is the most practical for running a backend API?

## Cases

1. Node | Express
2. Deno | Express
3. Bun | Express
4. Deno | [Oak](https://deno.land/x/oak@v12.6.0)
5. Bun | [Elysia](https://elysiajs.com/)

## App Details

- 4 API endpoints
- Zod for input validation\*
- Prisma & Postgres

\*Because [Elysia](https://elysiajs.com/)
