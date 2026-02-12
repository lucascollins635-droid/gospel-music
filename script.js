let songs = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3",
  "song4.mp3"
];

let currentSong = 0;
let audio = new Audio();
let startTime;
let mixDuration = 60 * 60 * 1000; // 1 hour in milliseconds

function playMusic() {
  startTime = Date.now();
  currentSong = 0;
  playNext();
}

function playNext() {
  if (Date.now() - startTime >= mixDuration) {
    alert("1 Hour Worship Mix Finished 🙏");
    return;
  }

  audio.src = songs[currentSong];
  audio.play();

  audio.onended = function () {
    currentSong++;
    if (currentSong >= songs.length) {
      currentSong = 0; // loop songs again
    }
    playNext();
  };
}
