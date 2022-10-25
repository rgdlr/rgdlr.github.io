"use strict";

import { EVENT } from "./index.js";

export const DRAG = {
  DATA_TRANSFER: {
    KEY: "className",
    VALUE: {
      PRIMARY: "drag-primary",
      SECONDARY: "drag-secondary",
    },
  },
  IS_DROPPED: false,
};

// TODO : decouple functionality, elements as arguments, classes outside, etc.

export function initializeDrag({ container, source, target, primary, secondary }) {
  source.addEventListener(EVENT.DRAG_START, (_event) => {
    DRAG.IS_DROPPED = false;
  });

  source.addEventListener(EVENT.DRAG, (_event) => {
    source.style.opacity = "0.5";
  });

  source.addEventListener(EVENT.DRAG_END, (_event) => {
    if (!DRAG.IS_DROPPED) {
      source.style.opacity = "1.0";
      target.classList.remove("no-overlay");
      container.appendChild(source);
    }
  });

  target.addEventListener(EVENT.DRAG_ENTER, (_event) => {
    target.style.opacity = "0.9";
  });

  target.addEventListener(EVENT.DRAG_OVER, (event) => {
    event.preventDefault();
  });

  target.addEventListener(EVENT.DROP, (event) => {
    const className = event.dataTransfer.getData(DRAG.DATA_TRANSFER.KEY);
    if (className.includes(DRAG.DATA_TRANSFER.VALUE.PRIMARY)) {
      target.classList.remove(DRAG.DATA_TRANSFER.VALUE.SECONDARY);
      target.classList.add(DRAG.DATA_TRANSFER.VALUE.PRIMARY);
    } else if (className.includes(DRAG.DATA_TRANSFER.VALUE.SECONDARY)) {
      target.classList.remove(DRAG.DATA_TRANSFER.VALUE.PRIMARY);
      target.classList.add(DRAG.DATA_TRANSFER.VALUE.SECONDARY);
    } else {
      DRAG.IS_DROPPED = true;
      target.classList.add("no-overlay");
      target.appendChild(source);
    }
    source.style.opacity = "1.0";
    target.style.opacity = "1.0";
  });

  target.addEventListener(EVENT.DRAG_LEAVE, (_event) => {
    target.style.opacity = "1.0";
  });

  primary.addEventListener(EVENT.DRAG_START, (event) =>
    event.dataTransfer.setData(DRAG.DATA_TRANSFER.KEY, event.target.className)
  );

  secondary.addEventListener(EVENT.DRAG_START, (event) =>
    event.dataTransfer.setData(DRAG.DATA_TRANSFER.KEY, event.target.className)
  );
}

// TODO : template and reusability

export function drag(_element, _callback) {}

export function drop(_element, _callback) {}

export function dragAndDrop(source, sourceCallback, target, targetCallback) {
  const dragStart = source.addEventListener(EVENT.DRAG_START, () => console.log(1));
  const drag = source.addEventListener(EVENT.DRAG, sourceCallback);
  const dragEnd = source.addEventListener(EVENT.DRAG_END, () => console.log(3));
  const dragEnter = target.addEventListener(EVENT.DRAG_ENTER, () => console.log(4));
  const dragOver = target.addEventListener(EVENT.DRAG_OVER, (event) => {
    event.preventDefault();
    targetCallback();
    console.log(5);
  });
  const drop = target.addEventListener(EVENT.DROP, (event) => {
    event.preventDefault();
    targetCallback();
    console.log(6);
  });
  const dragLeave = target.addEventListener(EVENT.DRAG_LEAVE, () => console.log(7));
}
