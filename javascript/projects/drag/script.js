"use strict";

import { EVENT } from "../../src/js/index.js";

const DATA_TRANSFER = "className";
const DRAG_PRIMARY = "drag-primary";
const DRAG_SECONDARY = "drag-secondary";

const dragContainer = window.document.querySelector(".drag-container");
const source = window.document.querySelector(".drag-element");
const target = window.document.querySelector(".drop");

let isDropped = false;

source.addEventListener(EVENT.DRAG_START, (event) => {
  isDropped = false;
});

source.addEventListener(EVENT.DRAG, (event) => {
  source.style.opacity = "0.5";
});

source.addEventListener(EVENT.DRAG_END, (event) => {
  if (!isDropped) {
    source.style.opacity = "1.0";
    target.classList.remove("no-overlay");
    dragContainer.appendChild(source);
  }
});

target.addEventListener(EVENT.DRAG_ENTER, (event) => {
  target.style.opacity = "0.9";
});

target.addEventListener(EVENT.DRAG_OVER, (event) => {
  event.preventDefault();
});

target.addEventListener(EVENT.DROP, (event) => {
  const className = event.dataTransfer.getData(DATA_TRANSFER);
  if (className.includes(DRAG_PRIMARY)) {
    target.classList.remove(DRAG_SECONDARY);
    target.classList.add(DRAG_PRIMARY);
  } else if (className.includes(DRAG_SECONDARY)) {
    target.classList.remove(DRAG_PRIMARY);
    target.classList.add(DRAG_SECONDARY);
  } else {
    isDropped = true;
    target.classList.add("no-overlay");
    target.appendChild(source);
  }
  source.style.opacity = "1.0";
  target.style.opacity = "1.0";
});

target.addEventListener(EVENT.DRAG_LEAVE, (event) => {
  target.style.opacity = "1.0";
});

const dragPrimary = window.document.querySelector(".drag-primary");
const dragSecondary = window.document.querySelector(".drag-secondary");

dragPrimary.addEventListener(EVENT.DRAG_START, (event) => {
  event.dataTransfer.setData(DATA_TRANSFER, event.target.className);
});

dragSecondary.addEventListener(EVENT.DRAG_START, (event) => {
  event.dataTransfer.setData(DATA_TRANSFER, event.target.className);
});

// TODO : DRAGGABLE LIST : https://web.dev/drag-and-drop
// TODO : DRAGGABLE FULLSCREEN : https://www.w3schools.com/howto/howto_js_draggable.asp

source.addEventListener(EVENT.TOUCH_START, (event) => {
  if (isDropped) {
    target.classList.remove("no-overlay");
    dragContainer.appendChild(source);
  } else {
    target.classList.add("no-overlay");
    target.appendChild(source);
  }
  isDropped = !isDropped;
});

dragPrimary.addEventListener(EVENT.TOUCH_START, (event) => {
  target.classList.remove(DRAG_SECONDARY);
  target.classList.add(DRAG_PRIMARY);
});

dragSecondary.addEventListener(EVENT.TOUCH_START, (event) => {
  target.classList.remove(DRAG_PRIMARY);
  target.classList.add(DRAG_SECONDARY);
});
