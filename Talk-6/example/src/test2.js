//file 2

var alongvariablename = 2000;

//more comments

var unusedVAR = "bummer!";

if( alongvariablename == null){
	console.log("adsf");
}

{
  //going inside
  var alongeronemaybenotreally = 1;
  var quit = function(){
     var anotherreallylongone = alongeronemaybenotreally;
     anotherreallylongone += 1000;
     unusedVAR = anotherreallylongone;
  };
  
  quit();
}

console.log(alongvariablename + 30);

/*
  and this one too!
*/

console.log("All done here");
