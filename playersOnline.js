var http = require("https");

/////////// code from website /////////////


function getTestPersonaLoginCredentials(callback) {

    return http.get({
        host: 'mcapi.ca',
        path: '/query/198.24.171.162:25955/list'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            console.log('Data stream end: ' + body);
            var parsed = JSON.parse(body);
            console.log('Parsed ' + body);
            callback(
                parsed
            );
        });
    });

}

//////////// my attempt with errors ////////////////


function json() {

    var body = '';
    request = http.get('https://mcapi.ca/query/198.24.171.162:25955/list', function(theJson){

		theJson.on('data', function (chunk){
			body += chunk;
		}).on('end', function(){
			console.log('Data stream end: ' + body);
			body = JSON.stringify(body);
			console.log('stringify: ' + body);
		theJson.on('error', function(err) {
      			console.error(err);
    		});

    		theJson.writeHead(200, {'Content-Type': 'application/json'} );

			// var responseBody = {
   //    			headers: headers,
   //    			method: method,
   //    			url: url,
   //    			body: body
   //  		};

    		theJson.write(JSON.stringify(body));
    		theJson.end();
		});
		
	});

}

// function get(response){
// 	return http.get('https://mcapi.ca/query/198.24.171.162:25955/list', function(response){
// 		console.log(response.statusCode);
// 		var body = "";
// 		response.on('data', function (chunk){
// 			body += chunk;
// 		});
// 		response.on('end', function(response){
			

// 			console.log("BODY: " + body);
// 			console.log(typeof body);
// 			body = JSON.stringify(body);
// 			console.log("STRING: " + body);
// 			console.log(typeof body);
// 			response = body;
// 			//console.log('request:' + request);
// 			//console.log(JSON.stringify(request));




			
// 		});
		
// 	});

// }

module.exports.tester = getTestPersonaLoginCredentials;
module.exports.json = json;