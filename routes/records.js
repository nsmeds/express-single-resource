const express = require('express');
const bodyParser = require('body-parser').json();
const Record = require('../models/record');
const router = express.Router();

router 
  .get('/', (req, res, next) => {
    Record.getAll()
      .then(records => res.send(records))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Record.get(req.params.id)
      .then(record => res.send(record))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Record.delete(req.params.id)
      .then(deleted => res.send(deleted))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    Record.add(req.body)
      .then(saved => res.send(saved))
      .catch(next);
  })
  .put('/:id', bodyParser, (req, res, next) => {
    Record.update(req.params.id, req.body)
      .then(saved => res.send(saved))
      .catch(next);
  });

  module.exports = router;