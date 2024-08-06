/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  compose: {
    client: "pg",
    connection: {
      host: "db",
      port: "5432",
      user: "postgres",
      password: "docker",
      database: "hardwareinv",
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: "docker",
      database: "hardwareinv",
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  staging: {
    client: "postgresql",
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
    client: "postgresql",
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

