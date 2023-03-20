// requires
const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./Routes/index.js');


// servidor
const app = express();

// middlewares
app.use(morgan('dev')); // para ver las peticiones que llegan al servidor
app.use(express.json()); // para que el servidor entienda los json

// routes
app.use(mainRouter);



module.exports = app;