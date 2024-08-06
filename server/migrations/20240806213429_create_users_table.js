/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.up = function(knex) {
  return knex.schema.hasTable('User').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('User', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('password_hash').notNullable();
        table.string('email').notNullable().unique();
      });
    }
  });
};


/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};