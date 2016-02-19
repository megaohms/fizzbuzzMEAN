var http = require('http');

http.createServer(function(req, res){
  res.statusCode = 200;
  res.end();
}).listen(8080, '127.0.0.1');