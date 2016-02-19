var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/fizzbuzz');

app.listen(8080);

module.exports = app;