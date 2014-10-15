var server = require('./app');
var mongoCreds = require('./.hiddenCreds.json');

//here is a VERY helpful library
var moment = require('moment');
//take a peek here or at the documentation etc
//console.log("Moment(): ", moment());

var mongoose = require('mongoose');


//MongoDB Connection string
//format specified here: http://docs.mongodb.org/manual/reference/connection-string/

//typically we will store our models in a directory
var GroupModel = require('./models/group.js');

//now the variable SIGAPP will contain a new object ready to be stored
var SIGAPP = new GroupModel({
  name: "SIGAPP",
  //meetingTime: moment(), //now
  meetingTime: moment('2014-02-14'),
  interests: ["web applications", "MongoDB", "AngularJS", "Node.js"]
});

//note that we are connecting to the test database
//mongoose.connect('mongodb://localhost/test');
mongoose.connect(mongoCreds.ConnectionString);

//lastly, lets save the objects
SIGAPP.save(function(err){
  if(err) console.log("ERROR SAVING MODEL:", err);
});

//this will search for all of the models
//note that we use the model to search for items. We obviously need to be connected to a MongoDB to do this.
GroupModel.find(function(err,models)
{
  if(err) console.log(err);
  else console.log(models);
});

server.listen(3000, function(){ console.log("listening on port 3000")});
