export class RotationController {
  stateRotation;
  characterRotation;
  rotationSpeed;

  constructor() {
    this.stateRotation = null;
    this.characterRotation = null;
    this.rotationSpeed = 0.05;
  }

  init(characterController) {
    this.stateRotation = characterController.state.rotation;
    this.characterRotation = characterController.character.rotation;
  }

  tick() {
    if (this.stateRotation.y === 1) this.characterRotation.y += this.rotationSpeed;
    if (this.stateRotation.y === -1) this.characterRotation.y -= this.rotationSpeed;
  }
}

export const rotationController = new RotationController();
