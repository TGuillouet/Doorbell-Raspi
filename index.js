const Sound = require("aplay");
const exp = require("express");
const app = require('http').Server(exp);
const io = require('socket.io')(app);

var isPlaying = false;

app.listen(3000);

io.on('connection', function (socket) {
  socket.on('play', function (data) {
    console.log(data);
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