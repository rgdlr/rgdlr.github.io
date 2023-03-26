export const mode = {
  IDLE: 0,
  STEALTH: 1,
  RUNNER: 2,
  SHOOTER: 3,
};

export class ModeController {
  constructor() {}

  init(characterController) {
    this.state = characterController.state;
    this.state["mode"] = mode.IDLE;
  }
  tick() {
    // this.state.mode = mode.IDLE;
    // if (this.keyListener.isPressed("Shift")) {
    //   this.state.mode = mode.SHOOTER;
    // }
  }
}

export const modeController = new ModeController();
