const express = require('express');

const logger = require('./api/middlewares/logger');

const router = require('./api/routes');


const app = express();


app.use(express.json())

app.use(logger);

app.use(router)


module.exports = app