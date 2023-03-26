import { keyListener } from "../tools/key-listener.js";

export class KeyController {
  peerId;
  state;
  keyListener;

  constructor(peerId) {
    this.peerId = peerId;
    this.state = null;
    this.keyListener = keyListener;
  }

  setKeyListener(keyListener) {
    this.keyListener = keyListener;
  }

  init(characterController) {
    this.state = characterController.state;
    this.state["translation"] = { x: 0, y: 0 };
    this.state["rotation"] = { y: 0 };
    this.state["angle"] = { y: 0 };
  }

  tick() {
    this.state.translation.x = 0;
    this.state.translation.y = 0;
    this.state.rotation.y = 0;
    this.state.angle.y = 0;

    if (this.keyListener.isPressed(["w", "W"])) {
      this.state.translation.y = 1;
    }
    if (this.keyListener.isPressed(["s", "S"])) {
      this.state.translation.y = -1;
    }
    if (this.keyListener.isPressed(["a", "A"])) {
      this.state.translation.x = 1;
    }
    if (this.keyListener.isPressed(["d", "D"])) {
      this.state.translation.x = -1;
    }

    // if (this.keyListener.isPressed("ArrowUp")) {
    //   this.state.angle.y = 1;
    // }
    // if (this.keyListener.isPressed("ArrowDown")) {
    //   this.state.angle.y = -1;
    // }
    if (this.keyListener.isPressed("ArrowLeft")) {
      this.state.rotation.y = 1;
    }
    if (this.keyListener.isPressed("ArrowRight")) {
      this.state.rotation.y = -1;
    }
  }
}

export const keyController = new KeyController();
