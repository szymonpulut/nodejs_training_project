const express = require('express');

const todoController = require('./controllers/todo');
const letsEncryptContoller = require('./controllers/lets_encrypt');

const app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static files - middleware
app.use(express.static('./public'));

// Fire controllers
todoController(app);
letsEncryptContoller(app);

// Listen to port
const openPort = process.env.PORT || 8080;
app.listen(openPort);
console.log(`You are listening to port ${openPort}`);
