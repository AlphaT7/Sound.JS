export default class Sound {
  constructor({ src, volume }) {
    this.audio = fetch(src);
    this.audioCtx;
    this.audioBuffer;
    this.volume = volume;
  }

  async play() {
    let audio = await this.audio;
    if (!this.audioCtx) this.audioCtx = new AudioContext();
    if (!this.audioBuffer) this.audioBuffer = await audio.arrayBuffer();

    let audioCtx = this.audioCtx;
    let sound = new AudioBufferSourceNode(audioCtx, { loop: false });
    let gainNode = audioCtx.createGain();
    sound.buffer = await audioCtx.decodeAudioData(this.audioBuffer.slice());
    gainNode.gain.value = this.volume;
    sound.connect(gainNode).connect(audioCtx.destination);
    sound.start(0);
  }
}
