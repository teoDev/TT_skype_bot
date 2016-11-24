var builder = require('botbuilder');
var https = require('https');
var querystring = require ('querystring');
var prompts = require('./prompts');

var model  = process.env.LUIS_MODEL;
var recognizer = new builder.LuisRecognizer(model);
var dialog= new builder.IntentDialog({recognizers:[recognizer]});

module.export=dialog.matches('LoadProfile',[
    confirmUsername,getProfile
])
.matches('SearchProfile',[
    confirmQuery,searchProfiles,getProfile
])
.onDefault([sendInstructions,redirectConversation]);



function confirmQuery(session,args,next){
session.dialogData.etities=args.entities;
var query = builder.EntityRecognizer.findEntity(args.entities,'query');

if (query){
    next({response: query.entity});
}else{
    builder.Prompts.text(session,'Who are you searching for ?');
}
}

var options = [
    'Load profile',
    'Search profiles'
]

function confirmUsername(session, args, next){
    session.dialogData.entities = args.entities;

    var username = builder.EntityRecognizer.findEntity(args.entities,'username');

if (username){
    next({response:username.entity});
} else if (session.dialog.username){
    next({response: session.dialogData.username});
}else {
    builder.Prompts.text(session,'What is the username ?');
}

}


function getProfile (session,result,next){
var username = result.response;

if (username.entity) username = session.dialogData.username = username.entity;
else session.dialogData.user = username;

if (!username){
    session.endDialog('Request cancelled.');
} else if (session.dialogData.profile && typeof (session.dialogData.profile.login)!=='undefined'){
    next();
} else {
loadProfile(username,function(profile){
if (profile && profile.message !=='Not Found'){
    session.dialogData.profile = profile;

    var message = new builder.Message(session).attachments([getProfileThumbnail])
    session.send(message);
    next();
}else {
    session.endDialog('Sorry couldn\'t find profile with name');
}

});

}


}