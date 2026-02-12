let songs = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3",
  "song4.mp3"
];

let currentSong = 0;
let audio = new Audio();
let startTime;
let mixDuration = 60 * 60 * 1000; // 1 hour

function playMusic() {
  startTime = Date.now();
  currentSong = 0;
  playNext();
}

function playNext() {

  // If 1 hour reached, stop everything
  if (Date.now() - startTime >= mixDuration) {
    audio.pause();
    alert("🔥 1 Hour Worship Mix Completed!");
    return;
  }

  audio.src = songs[currentSong];
  audio.play();

  audio.onended = function () {
    currentSong++;

    // Loop songs again
    if (currentSong >= songs.length) {
      currentSong = 0;
    }

    playNext();
  };
}
