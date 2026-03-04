import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn(
    "[db] DATABASE_URL is not set. Using in-memory storage fallback in development.",
  );
}

export const pool = connectionString
  ? new Pool({ connectionString })
  : undefined;

export const db = pool ? drizzle(pool, { schema }) : undefined;
