let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3"
];

let currentSong = 0;
let audio = new Audio();
let mixDuration = 60 * 60 * 1000; // 1 hour
let mixTimeout;

function playMusic() {
    currentSong = 0;
    playSong(currentSong);

    mixTimeout = setTimeout(() => {
        audio.pause();
        alert("🔥 1 Hour Worship Mix Finished!");
    }, mixDuration);
}

function playSong(index) {
    audio.src = songs[index];
    audio.play();

    document.getElementById("nowPlaying").innerText =
        "Now Playing: " + songs[index];

    audio.onended = function () {
        currentSong++;
        if (currentSong >= songs.length) {
            currentSong = 0;
        }
        playSong(currentSong);
    };
}
