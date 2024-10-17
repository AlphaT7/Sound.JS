export default class typeIt {
  constructor({ id, text, sound }) {
    this.id = id;
    this.text = text;
    this.sound = sound;
  }

  async sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  async typeText() {
    document.getElementById(this.id).innerHTML = "";
    for await (let char of this.text) {
      let time = Math.floor(Math.random() * 48) + 12;
      this.sound.play();
      document.getElementById(this.id).innerHTML += char;
      await this.sleep(time);
    }
  }
}
