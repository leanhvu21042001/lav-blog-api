import dotenv from "dotenv";
dotenv.config();

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    debug: true,
    client: "pg",
    version: "15.0",
    connection: process.env.DB_URL_DEVELOPMENT,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },

  testing: {
    client: "pg",
    version: "15.0",
    connection: process.env.DB_URL_TESTING,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },

  production: {
    client: "pg",
    version: "15.0",
    connection: process.env.DB_URL_PRODUCTION,
    pool: {
      min: 0,
      max: 15,
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },
};
