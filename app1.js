
var playersOnlineJSON = require("./playersOnline.js");
var http = require("https");
//playersOnlineJSON.json()

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (request, response) {
    var jsonreply = playersOnlineJSON.tester(function(){
    	console.log('attempt to log returned values: ' + jsonreply)
    });
    response.end();
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (request, response) {
   	console.log("Got a GET request for /list_user");
	
   //console.log(res);
   // Prepare output in JSON format
   // response.contentType('application/json'); 
    response.end( function(body){
    	playersOnlineJSON.json(body);
    	response = body;
    	console.log(body);
    	console.log('finished getting body');
    });


})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})