import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationClient = postgres(env.DB_URI, { max: 1 });

await migrate(drizzle(migrationClient), { migrationsFolder: './drizzle' });

await migrationClient.end();
