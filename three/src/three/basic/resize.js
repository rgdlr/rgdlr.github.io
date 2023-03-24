import { perspectiveCamera } from "./camera.js";

class Resize {
  #renderer;

  constructor() {}

  start(renderer) {
    this.#renderer = renderer;
    window.addEventListener("resize", this.resize.bind(this));
  }

  stop() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.updateProjectionMatrix();
    this.#renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

export const resize = new Resize();
