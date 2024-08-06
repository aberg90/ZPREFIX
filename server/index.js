const express = require('express');
const app = express();
const port = process.env.PORT || 8080;  // Make sure it's all caps: PORT
const cors = require('cors');
//const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.use(cors());
app.use(express.json());  // Ensure this middleware is enabled to parse JSON

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json('My API is up and running Yo!');
});

// Test endpoint
app.get('/test', (req, res) => {
  res.status(200).json("Testing this endpoint");
});

// Example database access endpoint
app.get('/crew', (req, res) => {
  knex('best_crew_ever')
    .select('*')
    .then(data => res.status(200).json(data));
});

// Endpoint to start a new game
app.post('/api/new-game', async (req, res) => {
  const { userId } = req.body;
  try {
    const newGame = await knex('games').insert({
      user_id: userId,
      // Additional fields like 'score' or 'status' might be initialized here
    }, ['id']);  // Return the id of the new game
    res.status(201).json({ game: newGame[0], message: 'New game created!' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Could not create a new game' });
  }
});

// Endpoint to make a move in a game
app.post('/api/move', async (req, res) => {
  const { gameId, row, col } = req.body;
  // Example logic to update the game state based on a move
  try {
    // Here you would typically check the current game state, validate the move,
    // update the game state in the database, and return the new state
    const updatedGame = {};  // This should be fetched/updated in your database
    res.status(200).json({ game: updatedGame, message: 'Move processed' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Could not process move' });
  }
});

// Server start
app.listen(port, () => console.log(`Express server listening on port ${port}`));