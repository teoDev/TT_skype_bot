var querystring = require('querystring');
var https = require('https');

module.exports = {

    executeSearch: function (query, callback) {
        console.log('**1 '+ '/search/users?q=' + querystring.escape(query));
        this.loadData('/search/users?q=' + querystring.escape(query), callback);
    },

    loadProfile: function (username, callback) {
        console.log('**2');
        this.loadData('/users/' + querystring.escape(username), callback);
    },

    loadData: function (path, callback) {
        var options = {
            host: 'api.github.com',
            port: 443,
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
                callback(JSON.parse(data));
            });
        });
        request.end();
    }
}





