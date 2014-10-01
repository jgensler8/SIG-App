var http = require('http');
var server = http.createServer(function(req,res)
{
  res.write("hello");
  res.end();
});

server.listen(9000, function(){
  console.log("server listening on port 9000");
});
