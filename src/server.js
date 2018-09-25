const express = require('express');
const app = express();

// let links = {
//   {
//     Name: 'Ani',
//     Link: 'www.google.com',
//     LinkName: 'Google',
//     Points: '500'
//   },
//   {
//     Name: 'Ani1',
//     Link: 'www.facebook.com',
//     LinkName: 'Facebook',
//     Points: '700'
//   },
//   {
//     Name: 'Ani2',
//     Link: 'www.stackoverflow.com',
//     LinkName: 'Stackoverflow',
//     Points: '1500'
//   }
// }
/**
 * Returns a list of Links that users have
 * submitted.
 */
app.get('/links', (req, res) => {
  // res.send('Implement this endpoint')
  res.send(links)
});

/**
 * Saves a Link that a user submitted.
 */
app.post('/', (req, res) => {
  // res.send('Implement this endpoint')
});

app.listen(3000, () => console.log('API running on port 3000'));