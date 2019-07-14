'use strict';

const express = require('express');
const app = express();
const oofError = require('./middleware/error.js');


let router = express.Router();


router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', oofError, (req,res) => {
  res.status(200).send('Route D');
  next('oof')
});

module.exports = router;