import { animationBehavior } from "../animations/animation-behavior.js";
import { TransitionHandler } from "../animations/transition-handler.js";
import { mode } from "./mode.js";

export class AnimationController {
  state;
  transitionHandler;

  constructor() {
    this.state = null;
    this.transitionHandler = null;
  }

  init(characterController) {
    this.state = characterController.state;
    if (!this.transitionHandler) {
      this.transitionHandler = new TransitionHandler(characterController.character);
    }
    this.transitionHandler.start();
  }

  stop() {
    this.transitionHandler.start();
  }

  tick() {
    const speed = 1.2;
    if (this.state.mode === mode.IDLE) {
      if (false) {
      } else if (this.state.translation.x === 1) {
        this.transitionHandler.action(animationBehavior.strafeLeft, speed);
      } else if (this.state.translation.x === -1) {
        this.transitionHandler.action(animationBehavior.strafeRight, speed);
      } else if (this.state.translation.y === 1) {
        this.transitionHandler.action(animationBehavior.runForward, speed);
      } else if (this.state.translation.y === -1) {
        this.transitionHandler.action(animationBehavior.runBackward, speed);
      } else {
        this.transitionHandler.action(animationBehavior.idle);
      }
    }
    if (this.state.mode === mode.SHOOTER) {
      if (false) {
      } else if (this.state.translation.x === 1) {
        this.transitionHandler.action(animationBehavior.shooterStrafeLeft, speed);
      } else if (this.state.translation.x === -1) {
        this.transitionHandler.action(animationBehavior.shooterStrafeRight, speed);
      } else if (this.state.translation.y === 1) {
        this.transitionHandler.action(animationBehavior.shooterRunForward, speed);
      } else if (this.state.translation.y === -1) {
        this.transitionHandler.action(animationBehavior.shooterRunBackward, speed);
      } else {
        this.transitionHandler.action(animationBehavior.shooterIdle);
      }
    }
  }
}

export const animationController = new AnimationController();
