var http = require('http');
var faye = require('faye');
var app = require('./app');

var server = http.createServer(app),
	bayeux = new faye.NodeAdapter( {mount:'/faye', timeout:45});

bayeux.attach(server);
server.listen(8000);