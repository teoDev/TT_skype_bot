var builder = require('botbuilder');
var restify = require('restify');

//create the connector in this case that will be console 
//connector because is simple 
//var connector = new builder.ConsoleConnector().listen();
var connector = new builder.ChatConnector();
//create the bot
var bot = new builder.UniversalBot(connector);

/*//add in the dialog
bot.dialog('/',function(session){
//session.send('Hello bot');
var userMessage = session.message.text;
session.send('you said '+userMessage);
});*/

bot.dialog('/',[
function(session){
builder.Prompts.text(session,'Please enter your name');
},
function(session,result){
session.send('Hello, '+result.response);
}
]);


var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function(){
console.log('%s listenning to %s',server.name,server.url);
});

server.post('/api/messages',connector.listen());