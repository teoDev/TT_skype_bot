var dialog = require('./dialog');
var prompts = require('/prompts');


module.exports = {
start:function(){
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
console.log('listening');
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
bot.dialog('/',dialog);
}
}