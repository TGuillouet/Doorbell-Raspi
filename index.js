const app = require('express')();
const http = require('http').Server(app);
const Sound = require('aplay');

var isPlaying = false;

/* http.listen(3000, function(){
    if (isPlaying === false) {
        playSound('NeedBackup.wav');
    }
}); */

if (isPlaying === false) {
    playSound('NeedBackup.wav');
}

function playSound(soundName) {
    isPlaying = true;
    // with ability to pause/resume:
    var music = new Sound();
    music.play(__dirname + '/Sounds/' + soundName);
    console.log(music);
    // you can also listen for various callbacks:
    music.on('complete', function () {
        setTimeout(() => {
            isPlaying = false;
        }, 10000);
    });
}