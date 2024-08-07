const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// testing root endpoint
app.get('/', (req, res) => {
  res.status(200).json('My API is up and running Yo!');
});

// testing user endpoint
app.get('/users', (req, res) => {
  knex('User')
    .select('*')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error retrieving users");
    });
});

// // list all items
// app.get('/users/items', async (req, res) => {

// //will attempt to implement on second day.
// });

// // single item details
// app.get('/users/items/:id', async (req, res) => {
//   const { id } = req.params;

//  //will attempt to implement on second day.
// });

// // edit item
// app.put('/api/items/:id', async (req, res) => {
//   const { id } = req.params;
//   const { item_name, description, quantity } = req.body;

//   ///will attempt to implement on second day.
// });


// // POST /api/users/register
// app.post('/users/register', async (req, res) => {
//   const { username, password, email } = req.body;

//   // Will attempt to implement on second day
// });

// // POST /api/users/login
// app.post('/users/login', async (req, res) => {
//   const { username, password } = req.body;

//   //will attempt to implement on second day.
//   //already staged jwt secret key in .env file. added gitignore file
// });

// // add new item
// app.post('/users/items', async (req, res) => {
//   const { item_name, description, quantity, user_id } = req.body;

//   //will attempt to implement on second day.
// });

// // delete item
// app.delete('/api/items/:id', async (req, res) => {
//   const { id } = req.params;

//   //will attempt to implement on second day.
// });



app.listen(port, () => console.log(`Express server listening on port ${port}`));
