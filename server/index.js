const express = require('express');
const db = require('../db/dbConnection.js');
const journalEntriesCache = require('./journalEntriesCache.js');

const port = 4000;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

app.get('/journal', (req, res) => {
  db.query('SELECT * FROM entries', (err, result) => {
    if (err) {
      console.log('get err', err)
      res.sendStatus(400)
    } else {
      journalEntriesCache.push(result)
      res.send(result)
    }
  })
})

app.post('/journal', (req, res) => {
  const body = req.body

  db.query('INSERT INTO entries (entry_body) VALUES (?)', [body.entry], (err, result) => {
    if (err) {
      console.log('db err', err)
      res.sendStatus(400)
    } else {
      res.sendStatus(200)
    }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});