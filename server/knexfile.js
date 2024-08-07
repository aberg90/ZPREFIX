/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

const { DB_CONNECTION_STRING } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: DB_CONNECTION_STRING,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  staging: {
    client: "pg",
    connection: {
      database: "hardwareinv",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      tableName: "knex_migrations",
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: "pg",
    connection: {
      database: "hardwareinv",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      tableName: "knex_migrations",
    },
    seeds: {
      directory: './seeds',
    },
  },
};
