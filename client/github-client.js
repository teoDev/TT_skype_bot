var querystring = require('querystring');
var https = require('https');
var http = require('http');
var requestify = require('requestify');
var request = require('request');
var $ = require("jQuery");
var tagsArray = ["9b0zTTyAGV", "fzsHlAre8x", "GtVs3RO3ym","JW5tHwalED", "O43jioTEqr", "O4JDooUre8",
                "rmRtEEvllK", "tKph6fOm5q", "VSOAjaT9qr", "WKusBDYWzX"];






module.exports = {

    executeSearch: function (query, callback) {
        //console.log('**1 '+ '/search/users?q=' + querystring.escape(query));
        this.loadData('/questions', callback);
    },
    executeSearchHttp: function (query,callback) {

    /*return http.get({
        host: '192.168.173.233',
        port: 8080,
        path: '/search/'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            console.log(parsed);
            callback({
                //email: parsed.question,
                //password: parsed.question
            });
        });
    });
*/

/*
return http.post({
        host: '192.168.173.233',
        port: 8080,
        path: '/search/',
        body: JSON.stringify(tagsArray)
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            console.log(parsed);
            callback({
                //email: parsed.question,
                //password: parsed.question
            });
        });
    });
*/

/*
var options = {
    host: '192.168.173.233',
    port: 80,
    path: '/search',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(tagsArray)
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
});
*/
/*
requestify.post('192.168.173.233:8080/search', {
    body: tagsArray
})
.then(function(response) {
    // Get the response body (JSON parsed or jQuery object for XMLs)
    console.log("------->"+response);
});
*/
/*
var googleOptions={
  hostname: 'language.googleapis.com',
  port: 443,
  path: '/v1/documents:analyzeSyntax?key=AIzaSyB_5h1uBmvzURrKZ4AsFWF90TWEkHsjp08',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
}
//var responseFromGoogle;
var resultArray=[];
var reqGoogle = https.request(googleOptions, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (body) {

      var responseFromGoogle=JSON.stringify(body);

     // body = body.replace(/\r?\n/g, "");
     var myEscapedJSONString = responseFromGoogle.replace(/\\n/g, "\\n")
                                      .replace(/\\'/g, "\\'")
                                      .replace(/\\"/g, '\\"')
                                      .replace(/\\&/g, "\\&")
                                      .replace(/\\r/g, "\\r")
                                      .replace(/\\t/g, "\\t")
                                      .replace(/\\b/g, "\\b")
                                      .replace(/\\f/g, "\\f");

console.log("&&&&"+myEscapedJSONString);

      var responseFromGoogle1=JSON.parse(myEscapedJSONString);
      console.log("------>"+responseFromGoogle1);
     var str = '{ "name": "John Doe", "age": 42 }';
var obj = JSON.parse(str);

console.log('obj= '+obj.name);
   
  });
});
reqGoogle.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

 var testJS2  = {"document":{"type":"PLAIN_TEXT","content":"I love windchill"},"encodingType":"UTF16"};
reqGoogle.write(JSON.stringify(testJS2));

reqGoogle.end();

*/

console.log('question from user '+query);

var options = {
  hostname: '192.168.173.233',
  port: 8080,
  path: '/questions/search/find-by-tags',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};


var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
var testJS = [
   "CREATE", 
   "SCAT",
   "RUN"
 ];

 //var testJS2  = {"document":{"type":"PLAIN_TEXT","content":"test me friend now"},"encodingType":"UTF16"};
req.write(JSON.stringify(testJS));
req.end();


//$.post( "192.168.173.233:8080/search", { 'choices[]': [ "Jon", "Susan" ] } );


//req.write(data);
//req.end();
/*var url = '192.168.173.233:8080/search'
var options = {
  method: 'post',
  body: tagsArray,
  url: url
}

request(options, function (err, res, body) {
  if (err) {
    inspect(err, 'error posting json')
    return
  }
  console.log('body==== '+body);
  */
  /*var headers = res.headers
  var statusCode = res.statusCode
  inspect(headers, 'headers')
  inspect(statusCode, 'statusCode')
  inspect(body, 'body')*/
//}


    
    },
    loadProfile: function (username, callback) {
        console.log('**2');
        this.loadData('/users/' + querystring.escape(username), callback);
    },

    loadData: function (path, callback) {
        var options = {
            host: '192.168.173.233',
            port: 8080,
            path: path,
            method: 'GET',
            headers: {
                'User-Agent': 'sample-bot'
            }
        };

        var profile
        var request = https.request(options, function (respons) {
            console.log('this is response '+ respons);
            var data = '';
            respons.on('data', function (chunk) { data += chunk; });
            respons.on('end', function () {
                console.log(JSON.parse(data));
                callback(JSON.parse(data));
            });
        });
        request.end();
    }
}





