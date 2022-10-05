"use strict";

import { EVENT } from "./index.js";

export function drag(_element, _callback) {}

export function drop(_element, _callback) {}

export function dragAndDrop(source, sourceCallback, target, targetCallback) {
  const dragStart = source.addEventListener(EVENT.DRAG_START, () => console.log(1));
  const drag = source.addEventListener(EVENT.DRAG, sourceCallback);
  const dragEnd = source.addEventListener(EVENT.DRAG_END, () => console.log(3));
  const dragEnter = target.addEventListener(EVENT.DRAG_ENTER, () => console.log(4));
  const dragOver = target.addEventListener(EVENT.DRAG_OVER, (e) => {
    e.preventDefault();
    targetCallback();
    console.log(5);
  });
  const drop = target.addEventListener(EVENT.DROP, (e) => {
    e.preventDefault();
    targetCallback();
    console.log(6);
  });
  const dragLeave = target.addEventListener(EVENT.DRAG_LEAVE, () => console.log(7));
}
