/*
typical node.js library inclusion
*/
var http = require('http');

/*
see http://nodejs.org/api/http.html#http_http_createserver_requestlistener
*/
var server = http.createServer(function(req, res)
{
  /*
  a request has come to our server and we will write some text to the response object.
  see this reference for things to do with the response object:
  http://nodejs.org/api/http.html#http_class_http_serverresponse
  */
  res.write("Hello world");

  /*
  We have received a request but we must send it back. We use the .end() method to do just that.
  Note that we could have several functions that may add data to the response. This is
  where middleware comes in!
  */
  res.end();
});


/*
  We have initialized the server object and we are now ready to "deploy" it.
  We pass the port to listen on and a callback when the initialization of the
  listen code is done.
*/
server.listen(3000, function()
{
  console.log("server started");
});
