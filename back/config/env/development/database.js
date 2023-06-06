module.exports = ({ env }) => ({
	connection: {
	  client: 'postgres',
	  connection: {
		host: env('DATABASE_HOST', 'localhost'),
		port: env.int('DATABASE_PORT', 5432),
		database: env('DATABASE_NAME', 'db'),
		user: env('DATABASE_USERNAME', 'username'),
		password: env('DATABASE_PASSWORD', 'password'),
		schema: env('DATABASE_SCHEMA', 'public'), // Not required
		ssl: {
		  rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
		},
	  },
	  debug: false,
	},
  });