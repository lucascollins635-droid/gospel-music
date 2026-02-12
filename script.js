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
let fadeInterval;
let timerInterval;

function playMusic() {
  startTime = Date.now();
  currentSong = 0;
  playNext();
  startTimer();
}

function playNext() {

  if (Date.now() - startTime >= mixDuration) {
    audio.pause();
    document.getElementById("nowPlaying").innerText = "🔥 Worship Completed!";
    return;
  }

  audio.src = songs[currentSong];
  audio.volume = 0;
  audio.play();

  document.getElementById("nowPlaying").innerText =
    "Now Playing: " + songs[currentSong];

  fadeIn();

  audio.onended = function () {
    currentSong++;
    if (currentSong >= songs.length) {
      currentSong = 0;
    }
    playNext();
  };
}

function fadeIn() {
  let volume = 0;
  fadeInterval = setInterval(function () {
    if (volume < 1) {
      volume += 0.05;
      audio.volume = volume;
    } else {
      clearInterval(fadeInterval);
    }
  }, 200);
}

function startTimer() {
  timerInterval = setInterval(function () {
    let timeLeft = mixDuration - (Date.now() - startTime);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      return;
    }

    let minutes = Math.floor(timeLeft / 60000);
    let seconds = Math.floor((timeLeft % 60000) / 1000);

    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("timer").innerText =
      "Time Left: " + minutes + ":" + seconds;
  }, 1000);
}
