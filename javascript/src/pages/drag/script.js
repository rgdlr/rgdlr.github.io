"use strict";

import { DRAG, EVENT, initializeDrag } from "../../js/index.js";

const drag = {
  container: window.document.querySelector(".drag-container"),
  source: window.document.querySelector(".drag-element"),
  target: window.document.querySelector(".drop"),
  primary: window.document.querySelector(".drag-primary"),
  secondary: window.document.querySelector(".drag-secondary"),
};

initializeDrag(drag);

// Extra : mobile behavior
drag.source.addEventListener(EVENT.TOUCH_START, (_event) => {
  if (DRAG.IS_DROPPED) {
    drag.target.classList.remove("no-overlay");
    drag.container.appendChild(drag.source);
  } else {
    drag.target.classList.add("no-overlay");
    drag.target.appendChild(drag.source);
  }
  DRAG.IS_DROPPED = !DRAG.IS_DROPPED;
});

drag.primary.addEventListener(EVENT.TOUCH_START, (_event) => {
  drag.target.classList.remove(DRAG.DATA_TRANSFER.VALUE.SECONDARY);
  drag.target.classList.add(DRAG.DATA_TRANSFER.VALUE.PRIMARY);
});

drag.secondary.addEventListener(EVENT.TOUCH_START, (_event) => {
  drag.target.classList.remove(DRAG.DATA_TRANSFER.VALUE.PRIMARY);
  drag.target.classList.add(DRAG.DATA_TRANSFER.VALUE.SECONDARY);
});

// TODO : draggable mobile
// TODO : draggable list : https://web.dev/drag-and-drop
// TODO : draggable fullscreen : https://www.w3schools.com/howto/howto_js_draggable.asp
