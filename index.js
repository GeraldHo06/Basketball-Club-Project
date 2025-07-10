window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgmusic");
  const button = document.getElementById("audio-control");

  let isPlaying = false;

  button.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      button.textContent = "🔊";
    } else {
      audio.pause();
      button.textContent = "🔇";
    }
    isPlaying = !isPlaying;
  });
});
