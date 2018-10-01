const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
var session = require('client-sessions');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(session());

let links = [
  {
    'name': 'ani',
    'link': 'www.google.com',
    'linkname': 'google',
    'points': '-500'
  },
  {
    'name': 'ani1',
    'link': 'www.facebook.com',
    'linkname': 'facebook',
    'points': '700'
  },
  {
    'name': 'ani2',
    'link': 'www.stackoverflow.com',
    'linkname': 'stackoverflow',
    'points': '1500'
  }
]
/**
 * Returns a list of Links that users have
 * submitted.
 */
app.get('/links', (req, res) => {
  //res.send('Implement this endpoint')
  res.send(links)
});

/**
 * Saves a Link that a user submitted.
 */
app.post('/', (req, res) => {
  var sessData = req.session;
  sessData.Name = "foo";
  res.send('Implement this endpoint')
});

app.listen(port, () => console.log('API running on port '+ port));