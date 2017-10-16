'use strict';
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8085;
require('mongoose').connect('mongodb://127.0.0.1:27017/leoManga'); 
const router = require('./routes');
app.use('/api', router);

app.listen(port);
console.log('Application started on port ' + port);