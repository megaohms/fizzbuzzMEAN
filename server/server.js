var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/fizzbuzz');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB connection is open!");
})

app.get('/', function(req, res) {
  res.send('Get your world!');
});
app.post('/', function(req, res) {
  res.sendStatus(200);
});

app.listen(8080);

module.exports = app;