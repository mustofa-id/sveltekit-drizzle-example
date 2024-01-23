import { loadEnv } from 'vite';

const env = loadEnv('production', '.', '');

/** @type import('drizzle-kit').Config */
export default {
	schema: './src/lib/server/db/schema.js',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: env.DB_URI
	}
};
