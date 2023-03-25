export const FRAME_RATE = 25;
export const FRAME_RATE_IN_MS = 1000 / FRAME_RATE;

export const intervalRecorder = (callback, { frameRateInMs } = {}) => {
  setInterval(callback, frameRateInMs ?? FRAME_RATE_IN_MS);
};

export class Recorder {
  #flag;
  #callbacks;

  constructor() {
    this.#flag = false;
    this.#callbacks = [];
  }

  add(callback) {
    const callbackIndex = this.#callbacks.indexOf(callback);
    if (callbackIndex > -1) {
      return;
    }
    this.#callbacks.push(callback);
  }

  remove(callback) {
    const callbackIndex = this.#callbacks.indexOf(callback);
    if (callbackIndex > -1) {
      this.#callbacks.splice(callbackIndex, 1);
    }
  }

  run = () => {
    if (!this.#flag) {
      return;
    }
    this.#callbacks.forEach((callback) => callback());
    window.requestAnimationFrame(this.run);
  };

  start() {
    if (this.#flag) {
      return;
    }
    this.#flag = true;
    this.run();
  }

  stop() {
    this.#flag = false;
  }
}

export const recorder = new Recorder();
