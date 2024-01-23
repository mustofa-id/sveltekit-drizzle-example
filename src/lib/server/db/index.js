import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(env.DB_URI);
const db = drizzle(queryClient);

export default db;
