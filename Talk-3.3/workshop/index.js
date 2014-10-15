var server = require('./app.js');

/*

 check out routes/index.js to implement a REST API

*/


//install and require mongoose
var mongoose = ...
mongoose.connect( ???STRING??? );

//import your model here
var ???MODEL??? = require('./models/????');

//initialize the model
var thingy = new ???MODEL???({
 ...
 fields: value,
 ...
});

//save the model
thingy.save();

server.listen(3000, function(){console.log("listening on port 3000")});
