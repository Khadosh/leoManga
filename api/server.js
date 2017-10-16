'use strict';
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connection.openUri('mongodb://127.0.0.1:27017/leoManga'); 
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', [
  require('./routes/common'),
  require('./routes/mangas')
]);

const port = 8085;
app.listen(port);
console.log('Application started on port ' + port);