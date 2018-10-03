const app = require("express")();
const http = require("http").Server(app);
const Sound = require("aplay");
var io = require('socket.io')(http);

var isPlaying = false;

http.listen(3000, function(){
    console.log("Begin listening port 3000");
    io.on("msg", () => {
        if (isPlaying === false) {
            playSound('NeedBackup.wav');
        }
    });
});

function playSound(soundName) {
  isPlaying = true;
  var music = new Sound();
  music.play(__dirname + "/Sounds/" + soundName);
  music.on("complete", function() {
    setTimeout(() => {
      isPlaying = false;
    }, 10000);
  });
}
