let songs = [
    "assets/song1.mp3",
    "assets/song2.mp3",
    "assets/song3.mp3",
    "assets/song4.mp3"
];

let currentSong = 0;
let audio = new Audio();
audio.volume = 0;

function startMusic() {
    playSong(currentSong);
}

function playSong(index) {
    audio.src = songs[index];
    audio.play();

    fadeIn();

    audio.onended = function() {
        currentSong++;
        if (currentSong < songs.length) {
            playSong(currentSong);
        } else {
            alert("Worship session finished 🙏🔥");
        }
    };
}

function fadeIn() {
    let fade = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);
}
