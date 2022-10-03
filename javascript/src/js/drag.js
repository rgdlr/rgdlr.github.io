"use strict";

import { EVENT } from "./index.js";

export function useDragAndDrop(source, target, callback) {
  // TODO : USE DRAG AND DROP
  const dragStart = source.addEventListener(EVENT.DRAG_START, callback);
  const drag = source.addEventListener(EVENT.DRAG, callback);
  const dragEnd = source.addEventListener(EVENT.DRAG_END, callback);
  const dragEnter = target.addEventListener(EVENT.DRAG_ENTER, callback);
  const dragOver = target.addEventListener(EVENT.DRAG_OVER, callback);
  const drop = target.addEventListener(EVENT.DROP, callback);
  const dragLeave = target.addEventListener(EVENT.DRAG_LEAVE, callback);
}
