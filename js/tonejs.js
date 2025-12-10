import * as Tone from "https://esm.sh/tone@15.1.22";

const button = document.querySelector(".tone");

button.addEventListener("click", async () => {
  console.log("▶ Button clicked");

  await Tone.start();
  console.log("🔊 Audio context started");

  const player = new Tone.Player({
    url: "./audio/generique-batman-1990x27s-296162.mp3",
    autostart: true,
  }).toDestination();

  await player.load();
  console.log("🎶 Player loaded");
});
