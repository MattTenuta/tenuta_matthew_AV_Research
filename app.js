const express = require('express');
const app = express();

app.use(express.static('videos'));

app.use(express.static('audio'));

const port = process.env.PORT || 3001;

// Here are my routes to connect to the other files

app.get('/', (req, res) => {

  res.sendFile(__dirname + '/index.html');
});

app.get('/audio.html', (req, res) => {
  res.sendFile(__dirname + '/audio.html');
});

app.get('/video.html', function(req, res) {
  res.sendFile(__dirname + '/video.html');
});

app.listen(3001, () => {
  console.log(`listening on ${port}`);
});

function toggleAudio() {
  var audio = document.getElementById('audio-player');
  var button = document.getElementById('play-button');
  
  if (audio.paused) {
    audio.play();
    button.src = "/images/wazowski.jpg";
  } else {
    audio.pause();
    button.src = "/images/wazowski.jpg";
  }
}



//colour blind mode

