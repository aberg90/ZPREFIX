const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

//{ origin: 'http://localhost:3000' }
app.use(cors());
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
      res.status(500).send("Error retrieving Users");
    });
});

/*----------------- item create, read, update, and delete (CRUD)------------------------------*/

// Create item  WORKS
app.post('/items', async (req, res) => {
  const { User_id, item_name, description, quantity, material, size } = req.body;
  try {
    const newItem = await knex('Item').insert({ User_id, item_name, description, quantity, material, size }, '*');
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error creating Items" });
  }
});

// Read all items WORKS
app.get('/items', async (req, res) => {
  try {
    const items = await knex('Item')
      .select('*');
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving Items" });
  }
});


// read specific item by ID  WORKS
app.get('/items/:id', async (req, res) => {
  try {
    const itemId = parseInt(req.params.id, 10);
    const item = await knex('Item').where('id', itemId).first();

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving item" });
  }
});

// Read specific item by item_name WORKS
app.get('/items/name/:item_name', async (req, res) => {
  try {
    const { item_name } = req.params;
    const item = await knex('Item').where('item_name', item_name).first();

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving item" });
  }
});


// Update item  WORKS
app.patch('/items/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    await knex('Item').where({ id }).update(updates);
    res.status(200).json({ message: 'Item updated' });
  } catch (error) {
    res.status(500).json({ error: "Error updating Items" });
  }
});

// Remove item  WORKS
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await knex('Item').where({ id }).del();
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: "Error deleting Items" });
  }
});

/*-------------------------- User Registration and Login --------------------------------------------*/

// FOR INSTRUCTORS, I AM GOING TO USE THIS FOR FUTURE PROJECTS, I WILL LEAVE MYSELF NOTES TO GOT BACK TO WHEN I PULL THIS REPO UP AGAIN

// register new user. go to https://www.youtube.com/watch?v=Ud5xKCYQTjM remember how to do this and re-visit bcrypt
// visit sdi-blended-workshop-docker-scaffold and sdi-blended-workshop-databases-scaffold for further info on CRUD apps
app.post('/users/register', async (req, res) => {
  try {
    const user = {
      username: req.body.username,
      password_hash: req.body.password,
      email: req.body.email
    };

    await knex('User').insert(user);
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('An error occurred while registering the user');
  }
});

// User Login. go to https://www.youtube.com/watch?v=Ud5xKCYQTjM remember how to do this and re-visit bcrypt
app.post('/users/login', async (req, res) => {
  try {
    const user = await knex('User')
      .where({ username: req.body.username })
      .first();

    if (!user) {
      return res.status(400).json({ message: 'Cannot find user' });
    }

    if (req.body.password === user.password_hash) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ message: 'Not Allowed' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'An error occurred while logging in' });
  }
});


/*--------------------------------------------------------------------------------*/

// //FROM YOUTUBE VIDEO USER REGISTRATION AND BYCRYPT
// app.post('/users/register', async (req, res) => {
//   knex('User')
//   try {
//     const salt = await bcrypt.genSalt()
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     const user = { username: req.body.username, password: hashedPassword }
//     users.push(user)
//     res.status(201).send()
//   } catch {
//     res.status(500).send()
//   }
// })

// app.post('/users/login', async (req, res) => {
//   knex('User')
//   const user = users.find(user => user.name === req.body.name)
//   if (user == null) {
//     return res.status(400).send('Cannot find user')
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       res.send('Successful Login')
//     } else {
//       res.send('Not Allowed')
//     }
//   } catch {
//     res.status(500).send()
//   }
// })

/*--------------------------------------------------------------------------------*/

app.listen(port, () => console.log(`Express server listening on port ${port}`));



