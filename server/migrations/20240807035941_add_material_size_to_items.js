exports.up = function(knex) {
  return knex.schema.table('Item', table => {
    table.string('material').nullable();
    table.string('size').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('Item', table => {
    table.dropColumn('material');
    table.dropColumn('size');
  });
};

// forgot to add these to my original items table, so this migration file is an edit to my items table.
