'use strict';

const express = require('express');
const oofError = require('../middleware/error');

let router = express.Router();

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', (req,res,next) => {
  console.log('In the "/d" route');
  next('def failed');
});

module.exports = router;