/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Item', table => {
    table.increments('id').primary();
    table.integer('User_id').unsigned().references('id').inTable('User')
      .onDelete('CASCADE').onUpdate('CASCADE');
    table.string('item_name').notNullable();
    table.text('description');
    table.integer('quantity').defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("Item", (table) => {
      table.dropForeign("User_id");
    })
    .then(() => {
      return knex.schema.dropTableIfExists('Item');
    });
};

