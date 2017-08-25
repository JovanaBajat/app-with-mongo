const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded ({extended: true}));
app.use(routes);


mongoose.connect('mongodb://localhost/toDoList', {useMongoClient: true}, () => {
  console.log('MonogoDb is now connected')
});


app.listen(3001, 'localhost', () => {
  console.log('server is running!')
})
