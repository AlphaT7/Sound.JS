import Sound from "./modules/sound.js";

const $ = document.querySelector.bind(document);

let s1 = new Sound({
  src: "./sound/sonar_beep.mp3",
  volume: 0.75,
});

let s2 = new Sound({
  src: "./sound/typeEffect.mp3",
  volume: 1,
});

document.getElementById("sound1").addEventListener("click", () => {
  s1.play();
});

document.getElementById("sound2").addEventListener("click", () => {
  typeText(
    "typing",
    "this is a very very very loooooooongish text string that goes on and on and on like it just won't end...."
  );
});

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function typeText(elId, text) {
  $("#" + elId).innerHTML = "";
  for (let char of text) {
    let time = Math.floor(Math.random() * (65 - 16 + 1)) + 16;
    s2.play();
    $("#" + elId).innerHTML += char;
    await sleep(time);
  }
}
