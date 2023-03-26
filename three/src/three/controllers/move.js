export class MoveController {
  peerId;
  state;
  character;
  speed;

  constructor(peerId) {
    this.peerId = peerId;
    this.state = null;
    this.character = null;
    this.speed = 0.05;
  }

  init(characterController) {
    this.state = characterController.state;
    this.character = characterController.character;
  }

  tick() {
    const { position, rotation } = this.character;
    if (this.state.translation.y === 1) {
      position.x += Math.sin(rotation.y) * this.speed;
      position.z += Math.cos(rotation.y) * this.speed;
    }
    if (this.state.translation.y === -1) {
      position.x -= Math.sin(rotation.y) * this.speed;
      position.z -= Math.cos(rotation.y) * this.speed;
    }
    if (this.state.translation.x === 1) {
      position.x += Math.sin(rotation.y + Math.PI / 2) * this.speed;
      position.z += Math.cos(rotation.y + Math.PI / 2) * this.speed;
    }
    if (this.state.translation.x === -1) {
      position.x += Math.sin(rotation.y - Math.PI / 2) * this.speed;
      position.z += Math.cos(rotation.y - Math.PI / 2) * this.speed;
    }
  }
}

export const moveController = new MoveController();
