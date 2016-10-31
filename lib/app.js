const express = require('express');
const app = express();
const path = require('path');
const store = require('storage-scout');
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.set('view engine', 'pug');

app.get('/records', (req, res) => {
  res.render('records', {
    title: '',
    message: ''
  });
});

app.put('/records', (req, res) => {
  storageScout.all()
    .then(records => res.send(records))
    .catch(err => console.log(err));
});

module.exports = app;