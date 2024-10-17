import Sound from "./modules/sound.js";
import typeIt from "./modules/typeEffect.js";

const $ = document.querySelector.bind(document);

let sonarBeep1 = new Audio("./sound/sonar_beep.mp3");
let typeEffect1 = new Audio("./sound/typeEffect.mp3");

let sonarBeep2 = new Sound({
  src: "./sound/sonar_beep.mp3",
  volume: 1,
});

let typeEffect2 = new Sound({
  src: "./sound/typeEffect.mp3",
  volume: 1,
});

let text =
  "this is a very very very loooooooongish text string that goes on and on and on like it just won't end....";
let typeIt1 = new typeIt({
  id: "typeEffect1",
  text: text,
  sound: typeEffect1,
});
let typeIt2 = new typeIt({
  id: "typeEffect2",
  text: text,
  sound: typeEffect2,
});

$("#sonar1").addEventListener("pointerup", () => {
  sonarBeep1.play();
});

$("#typing1").addEventListener("pointerup", () => {
  typeIt1.typeText();
});

$("#sonar2").addEventListener("pointerup", () => {
  sonarBeep2.play();
});

$("#typing2").addEventListener("pointerup", () => {
  typeIt2.typeText();
});
