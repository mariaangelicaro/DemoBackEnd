const express = require('express');
const bodyParser = require('body-parser');
const favoritesRoute = require('./routes/favoritesRoute');

const app = express();

app.use(bodyParser.json());


app.use('/api', favoritesRoute);

module.exports = app;
