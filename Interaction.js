var builder = require('botbuilder');
var restify = require('restify');
var githubClient = require('./client/github-client.js');
var stupidPages = require('./stupidPages.js');

var connector = new builder.ChatConnector();
var bot = new builder.UniversalBot(connector);
var dialog = new builder.IntentDialog();
var day = new Date();
var hour = day.getHours();
var min = day.getMinutes();
var currentTime = (hour * 60) + min;
var endWorkTime = 1080;
var timeToEnd = endWorkTime - currentTime;

bot.dialog('/endWork', [
    function (session, results) {
        var hoursLeft = (timeToEnd / 60);
     

        var msg = new builder.Message(session)
            .text(parseInt(hoursLeft) + 'h ' + (timeToEnd % 60) + "min until end of the work")
            .attachments([{
                contentType: "image/jpeg",
                contentUrl: "https://imgflip.com/s/meme/Spiderman-Computer-Desk.jpg"
            }]);
        session.send(msg);
        //session.send(parseInt(hoursLeft)+'h '+(timeToEnd%60)+"min until end of the work");


        session.endDialog();
    }
]);



bot.dialog('/multi', [
    function (session, results) {
       // for(;;){
        builder.Prompts.choice(session, 'What answer did you want to load', ["red","green","blue"]);
        session.beginDialog('/multi');
        // next();
      // if(result.response.entity !='red'){
       //    next();
      // } 
       //}
        session.endDialog();
    }
]);


bot.dialog('/sendStupidPage', [
    function (session, results) {
        session.send(stupidPages.getStupidWebsite());
        session.endDialog();
    }
]);


dialog.matches(/^search/i, [
    function (session, args, next) {
        if (session.message.text.toLowerCase() == 'search') {
            //
            builder.Prompts.text(session, ' Who do you want to search');
        }
    },
    function (session, result, next) {
        var query = result.response;
        console.log(query);
        if (!query) {
            session.endDialog('Request cancelled');
        } else {
            githubClient.executeSearchHttp(query, function (profiles) {
                //var totalCount = profiles.total_count;
                console.log("this is count *** "+profiles);
               /* if (totalCount == 0) {
                    session.endDialog('Sorry no results found');
                } else if (totalCount > 10) {
                    session.endDialog('More than 10 results were found. Please provide a more restrictive query.');
                } else {
                    session.dialogData.property = null;
                    var usernames = profiles.items.map(function (item) { return item.login });
                    console.log('********** '+usernames);
                    if (usernames.length == 1) {
                        session.send(usernames[0]);
                    } else {
                        builder.Prompts.choice(session, 'What answer did you want to load', usernames);
                    }
                }*/
            });
        }
    }, function (session, result, next) {

        console.log('========>this is after when I click profile ' + result.response.entity);
        session.send(result.response.entity);
    }
]);




dialog.matches(/^finish work/, [

    function (session) {
        session.beginDialog('/endWork');
    },
    function (session, result) {
        session.endDialog();
    }

]);


dialog.matches(/^bored/, [

    function (session) {
        session.beginDialog('/sendStupidPage');
    },
    function (session, result) {
        session.endDialog();
    }

]);


dialog.matches(/^multi/, [

    function (session) {
        session.beginDialog('/multi');
    },
    function (session, result) {
        console.log('#####'+result.response.entity);
        session.endDialog();
    }

]);


bot.dialog('/', dialog);

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listenning to %s', server.name, server.url);
});

server.post('/api/messages', connector.listen());



