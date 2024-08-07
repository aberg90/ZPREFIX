/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Item').del()
    .then(function() {
      return knex('Item').insert([
        {
          User_id: 1,
          item_name: 'nail',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam id eleifend nibh. Integer et aliquam odio. In a
          porttitor dolor, vel maximus dui. In in ullamcorper eros.
          Morbi turpis odio, vulputate at sagittis eu, consectetur
          vel lorem. Pellentesque ac ullamcorper sem, id laoreet nulla.
          Fusce euismod aliquet justo, aliquam varius sapien viverra nec.
          Pellentesque eget metus arcu. Sed et magna luctus, congue felis
          nec, cursus magna. Proin malesuada blandit dictum. Maecenas massa
          dolor, viverra quis gravida a, ornare a diam. Nullam blandit
          blandit ligula sed pulvinar. Aliquam a nibh volutpat, sollicitudin
          enim eget, malesuada sapien. Aliquam et tristique velit. Quisque.`,
          quantity: 10,
          material: 'steel',  // added new field from add material size
          size: 'small'       // added new field from add material size
        },
        {
          User_id: 1,
          item_name: 'bolt',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam id eleifend nibh. Integer et aliquam odio. In a
          porttitor dolor, vel maximus dui. In in ullamcorper eros.
          Morbi turpis odio, vulputate at sagittis eu, consectetur
          vel lorem. Pellentesque ac ullamcorper sem, id laoreet nulla.
          Fusce euismod aliquet justo, aliquam varius sapien viverra nec.
          Pellentesque eget metus arcu. Sed et magna luctus, congue felis
          nec, cursus magna. Proin malesuada blandit dictum. Maecenas massa
          dolor, viverra quis gravida a, ornare a diam. Nullam blandit
          blandit ligula sed pulvinar. Aliquam a nibh volutpat, sollicitudin
          enim eget, malesuada sapien. Aliquam et tristique velit. Quisque.`,
          quantity: 5,
          material: 'iron',  // added new field from add material size
          size: 'medium'     // added new field from add material size
        },
        {
          User_id: 2,
          item_name: 'screw',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam id eleifend nibh. Integer et aliquam odio. In a
          porttitor dolor, vel maximus dui. In in ullamcorper eros.
          Morbi turpis odio, vulputate at sagittis eu, consectetur
          vel lorem. Pellentesque ac ullamcorper sem, id laoreet nulla.
          Fusce euismod aliquet justo, aliquam varius sapien viverra nec.
          Pellentesque eget metus arcu. Sed et magna luctus, congue felis
          nec, cursus magna. Proin malesuada blandit dictum. Maecenas massa
          dolor, viverra quis gravida a, ornare a diam. Nullam blandit
          blandit ligula sed pulvinar. Aliquam a nibh volutpat, sollicitudin
          enim eget, malesuada sapien. Aliquam et tristique velit. Quisque.`,
          quantity: 100,
          material: 'titanium', // added new field from add material size
          size: 'large'         // added new field from add material size
        },
      ]);
    });
};
