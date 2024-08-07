const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
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

app.listen(port, () => console.log(`Express server listening on port ${port}`));
