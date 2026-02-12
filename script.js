function startMusic() {

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  const totalDuration = 20 * 60; // 20 minutes in seconds
  const now = audioContext.currentTime;

  function playChord(time) {
    const notes = [261.63, 329.63, 392.00]; // C major chord

    notes.forEach(freq => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      osc.connect(gain);
      gain.connect(audioContext.destination);

      gain.gain.setValueAtTime(0.2, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 3);

      osc.start(time);
      osc.stop(time + 3);
    });
  }

  for (let i = 0; i < totalDuration; i += 4) {
    playChord(now + i);
  }

  alert("Your 20 minute gospel worship is playing 🎶");
}
