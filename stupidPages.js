var initialClick = false;
var randomRange = 6;

// Useless websites: url | uses flash 
// Commented out websites which have crashed.

var webSites = {
    'http://heeeeeeeey.com/': false,
    'http://thatsthefinger.com/': false,
    'http://cant-not-tweet-this.com/': false,
    'http://weirdorconfusing.com/': false,
    'http://eelslap.com/': false,
    'http://www.staggeringbeauty.com/': false,
    'http://burymewithmymoney.com/': true,
    'http://endless.horse/': false,
    'http://www.fallingfalling.com/': true,
    'http://just-shower-thoughts.tumblr.com/': false,
    'http://ducksarethebest.com/': false,
    'http://www.trypap.com/': false,
    'http://www.republiquedesmangues.fr/': false,

};

var pages = ['http://heeeeeeeey.com/', 'http://thatsthefinger.com/', 'http://cant-not-tweet-this.com/',
'http://weirdorconfusing.com/','http://eelslap.com/','http://www.staggeringbeauty.com/','http://burymewithmymoney.com/',
'http://endless.horse/','http://www.fallingfalling.com/','http://just-shower-thoughts.tumblr.com/','http://www.trypap.com/',
'http://www.republiquedesmangues.fr/','http://www.partridgegetslucky.com/','http://www.rrrgggbbb.com/','http://beesbeesbees.com/',
'http://cat-bounce.com/','http://r33b.net/','http://imaninja.com/','http://tencents.info/',
'http://www.coloursquares.com/','http://www.ascii-middle-finger.com/','http://www.infinitething.com/'];

var sitesList = [
    ['http://heeeeeeeey.com/', false],
    ['http://thatsthefinger.com/', false],
    ['http://cant-not-tweet-this.com/', false],
    ['http://weirdorconfusing.com/', false],
    ['http://eelslap.com/', false],
    ['http://www.staggeringbeauty.com/', false],
    ['http://burymewithmymoney.com/', true],
    ['http://endless.horse/', false],
    ['http://www.fallingfalling.com/', true],
    ['http://just-shower-thoughts.tumblr.com/', false],
    ['http://ducksarethebest.com/', false],
    ['http://www.trypap.com/', false],
    ['http://www.republiquedesmangues.fr/', false],
    ['http://www.movenowthinklater.com/', false],
    ['http://www.partridgegetslucky.com/', false],
    ['http://www.rrrgggbbb.com/', true],
    ['http://beesbeesbees.com/', false],
    ['http://www.sanger.dk/', true],
    ['http://www.koalastothemax.com/', false],
    ['http://www.everydayim.com/', false],
    ['http://www.leduchamp.com/', true],
    ['http://www.haneke.net/', false],
    ['http://r33b.net/', true],
    ['http://randomcolour.com/', false],
    ['http://cat-bounce.com/', true],
    ['http://www.sadforjapan.com/', true],
    ['http://www.taghua.com/', true],
    ['http://chrismckenzie.com/', true],
    ['http://hasthelargehadroncolliderdestroyedtheworldyet.com/', false],
    ['http://ninjaflex.com/', false],
    ['http://iloveyoulikeafatladylovesapples.com/', true],
    ['http://ihasabucket.com/', false],
    ['http://corndogoncorndog.com/', false],
    ['http://www.ringingtelephone.com/', true],
    ['http://www.pointerpointer.com/', false],
    ['http://imaninja.com/', false],
    ['http://willthefuturebeaweso.me/', false],
    ['http://www.ismycomputeron.com/', false],
    ['http://www.nullingthevoid.com/', true],
    ['http://www.muchbetterthanthis.com/', true],
    ['http://www.ouaismaisbon.ch/', true],
    ['http://www.yesnoif.com/', false],
    ['http://iamawesome.com/', false],
    ['http://www.pleaselike.com/', false],
    ['http://crouton.net/', false],
    ['http://corgiorgy.com/', false],
    ['http://www.electricboogiewoogie.com/', true],
    ['http://www.wutdafuk.com/', false],
    ['http://unicodesnowmanforyou.com/', false],
    ['http://www.crossdivisions.com/', false],
    ['http://tencents.info/', false],
    ['http://intotime.com/', true],
    ['http://leekspin.com/', true],
    ['http://minecraftstal.com/', false],
    ['http://www.patience-is-a-virtue.org/', false],
    ['http://whitetrash.nl/', false],
    ['http://www.theendofreason.com/', false],
    ['http://zombo.com', true],
    ['http://pixelsfighting.com/', false],
    ['http://baconsizzling.com/', false],
    ['http://isitwhite.com/', false],
    ['http://onemillionlols.com/', false],
    ['http://www.omfgdogs.com/', false],
    ['http://oct82.com/', false],
    ['http://semanticresponsiveillustration.com/', true],
    ['http://chihuahuaspin.com/', false],
    ['http://potato.io/', false],
    ['http://www.blankwindows.com/', false],
    ['http://www.biglongnow.com/', true],
    ['http://dogs.are.the.most.moe/', false],
    ['http://tunnelsnakes.com/', false],
    ['http://www.infinitething.com/', false],
    ['http://www.trashloop.com/', false],
    ['http://www.ascii-middle-finger.com/', false],
    ['http://www.coloursquares.com/', false]
];








module.exports = {

    getStupidWebsite: function () {
        var site, range, index;
 
        var min=0,max=pages.length-1;
        index = Math.random() * (max - min) + min;
        console.log(index);
        return pages[parseInt(index)];
    }
}