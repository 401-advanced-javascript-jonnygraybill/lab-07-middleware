'use strict';

const express = require('express');
const errorHandler = require('./middleware/error.js');
const missingPage = require('./middleware/404.js');
const requestTime = require('./middleware/requestTime.js');
const consoleIt = require('./middleware/consoleIt.js');
const squareIt = require('./middleware/squareIt.js');
const router = require('./routes/routes.js');


const app = express();
const PORT = process.env.PORT || 8080;

//middleware

app.use(requestTime);
app.use(consoleIt);
app.use(router);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', squareIt(4), (req,res) => {
  res.status(200).send(`${req.number}`);
});

app.use('*', missingPage);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
