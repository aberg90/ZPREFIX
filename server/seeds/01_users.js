/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      return knex('User').insert([
        {id: 1, username: 'aaron_berg', password_hash: 'password1', email: 'aaron@email.com' },
        {id: 2, username: 'johnny_cash', password_hash: 'password2', email: 'johnny@email.com' }
      ]);
    });
};