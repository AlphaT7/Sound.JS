
# Sound.JS

A small JavaScript class for playing audio in the browser.




## API Reference


## Authors

- [@AlphaT7](https://github.com/AlphaT7)


## Documentation




## Usage/Examples
```javascript
// This is the whole class.

export default class Sound {
  constructor(sound) {
    this.audio = fetch(sound.src);
    this.audioBuffer;
    this.volume = sound.volume;
    this.audioCtx;
  }

  async play() {
    let audio = await this.audio;
    this.audioCtx = this.audioCtx == null ? new AudioContext() : this.audioCtx;
    this.audioBuffer =
      this.audioBuffer == null ? audio.arrayBuffer() : this.audioBuffer;

    let audioCtx = this.audioCtx;
    let audioBuffer = (await this.audioBuffer).slice();
    let decodedAudio = await audioCtx.decodeAudioData(await audioBuffer);
    let sound = new AudioBufferSourceNode(audioCtx, { loop: false });
    let gainNode = audioCtx.createGain();
    sound.buffer = await decodedAudio;
    gainNode.gain.value = this.volume;
    sound.connect(gainNode).connect(audioCtx.destination);
    sound.start(0);
  }
}

```


```javascript
// To use it:

import Sound from './sound.js';

let sound1 = new Sound({
  src: "./sound/sound1.mp3",
  volume: 0.75,
});

let sound2 = new Sound({
  src: "./sound/sound2.mp3",
  volume: 0.5,
});


document.getElementById("button1").addEventListener("click", ()=>{
    sound1.play();
});

document.getElementById("button2").addEventListener("click", ()=>{
    sound2.play();
});
```


## 🚀 About Me
Self-taught web developer, casual gamer, husband and father of 4.
