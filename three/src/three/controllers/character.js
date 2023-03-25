import { recorder } from "../tools/recorder.js";

export class CharacterController {
  character;
  state;
  controllers;

  constructor() {
    this.character = null;
    this.state = {};
    this.controllers = {};
  }

  setCharacter(character) {
    this.character = character;
  }

  add(controller) {
    this.controllers[controller.constructor.name] = controller;
  }

  remove(controller) {
    delete this.controllers[controller.constructor.name];
  }

  start() {
    Object.keys(this.controllers).forEach((key) => {
      this.controllers[key].init(this);
    });
    recorder.add(this.tick);
  }

  tick = () => {
    Object.keys(this.controllers).forEach((key) => {
      this.controllers[key].tick();
    });
  };
}

export const characterController = new CharacterController();
