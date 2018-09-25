const express = require('express');
const app = express();

/**
 * Returns a list of Links that users have
 * submitted.
 */
app.get('/links', (req, res) => {
  res.send('Implement this endpoint')
});

/**
 * Saves a Link that a user submitted.
 */
app.post('/', (req, res) => {
  res.send('Implement this endpoint')
});

app.listen(3000, () => console.log('API running on port 3000'));