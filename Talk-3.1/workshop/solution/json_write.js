var http = require('http');
var server = http.createServer(function(req,res)
{
  //don't forget to check this in the dev console!
  res.setHeader('Content-Type', 'application/json');

  var object = {'hello': 'world'};
  res.write(JSON.stringify(object));

  res.end();
});

server.listen(9000, function(){
  console.log("server listening on port 9000");
});
