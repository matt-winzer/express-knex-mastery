
exports.up = function(knex, Promise) {
  
  return knex.schema.createTable('beer', function (table) {
    table.increments()
    table.string('name')
    table.string('imageUrl')
    table.decimal('abv')
    table.string('review', 5000)
  })


};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('beer')

};
