export class KeyListener {
  keys;
  caster;
  controls;

  constructor(caster) {
    this.keys = {};
    this.caster = caster || console.log;

    const controls = document.querySelector(".controls");
    const w = controls.querySelector("controls__move--w");
    const a = controls.querySelector("controls__move--a");
    const s = controls.querySelector("controls__move--s");
    const d = controls.querySelector("controls__move--d");

    this.controls = { controls, w, a, s, d };
  }

  setCaster(caster) {
    this.caster = caster;
  }

  keyDown = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    if (this.keys[event.key]) {
      return;
    }
    this.keys[event.key] = true;
    this.caster([event.key, true, this.keys]);
  };

  keyUp = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    this.keys[event.key] = false;
    this.caster([event.key, false, this.keys]);
  };

  touchStart = (event) => {
    if (this.keys[event.target.innerText]) {
      return;
    }
    this.keys[event.target.innerText] = true;
    this.caster([event.target.innerText, true, this.keys]);
  };

  touchEnd = (event) => {
    this.keys[event.target.innerText] = false;
    this.caster([event.target.innerText, false, this.keys]);
  };

  isPressed(keys) {
    return Array.isArray(keys) ? keys.some((key) => this.keys[key]) : this.keys[keys];
  }

  start() {
    this.stop();
    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("keyup", this.keyUp);
    window.addEventListener("mousedown", this.touchStart);
    window.addEventListener("mouseup", this.touchEnd);
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchend", this.touchEnd);
  }

  stop() {
    window.removeEventListener("keydown", this.keyDown);
    window.removeEventListener("keyup", this.keyUp);
    window.removeEventListener("mousedown", this.touchStart);
    window.removeEventListener("mouseup", this.touchEnd);
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchend", this.touchEnd);
  }
}

export const keyListener = new KeyListener();
