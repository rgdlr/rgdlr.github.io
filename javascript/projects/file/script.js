"use strict";

import { useDragAndDrop } from "../../src/js/index.js";

const source = window.document.querySelector(".drag-source");
const target = window.document.querySelector(".drag-target");
useDragAndDrop(source, target, () => console.log("Fired event"));
