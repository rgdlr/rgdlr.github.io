import { AnimationMixer, Clock } from "../three.module.js";
import { recorder } from "../tools/recorder.js";

export class TransitionHandler {
  peerId;
  mixer;
  clock;
  mesh;
  clips;
  lastClip;
  interpolationTime;
  inProgress;
  callback;

  constructor(mesh, peerId) {
    this.peerId = peerId;
    this.mixer = new AnimationMixer(mesh);
    this.clock = new Clock();
    this.mesh = mesh;
    this.clips = mesh.animations.map((animation) => this.mixer.clipAction(animation));
    this.lastClip = null;
    this.interpolationTime = 0.2;
    this.inProgress = false;
    this.callback = null;
  }

  run = () => {
    this.mixer.update(this.clock.getDelta());
  };

  start() {
    recorder.add(this.run);
  }

  stop() {
    recorder.remove(this.run);
    console.log("Stopping TransitionHandler from", this.peerId);
  }

  onCycleFinished = () => {
    this.inProgress = false;
    if (this.callback !== null) {
      this.callback(this.lastClip);
      this.callback = null;
    }
  };

  action(animationId, timeScale = 1, cycleFlag = false) {
    if (this.inProgress) {
      return;
    }
    if (cycleFlag) {
      this.mixer.addEventListener("loop", this.onCycleFinished);
      this.inProgress = true;
    }
    this.mixer.timeScale = timeScale;
    if (this.lastClip === animationId) {
      return;
    }
    if (this.lastClip === null) {
      this.clips[animationId].play();
    } else {
      this.clips[animationId].reset().play();
      this.clips[this.lastClip].crossFadeTo(this.clips[animationId], 0.2, true);
    }
    this.lastClip = animationId;
  }
}
