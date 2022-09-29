"use strict";

import "./wc-button/index.js";
import "./wc-input/index.js";
import "./wc-span/index.js";

import { ATTRIBUTES } from "./wc-input/index.js";

const customInput = document.createElement("wc-input");
const attributes = {
  [ATTRIBUTES.BACKGROUND_COLOR]: "#FCF",
  [ATTRIBUTES.BORDER_COLOR]: "#A5A",
  [ATTRIBUTES.BORDER_RADIUS]: "0.5rem",
  [ATTRIBUTES.BORDER_SIZE]: "0.15rem",
  [ATTRIBUTES.CLEAR]: "",
  [ATTRIBUTES.ICON_BACKGROUND_COLOR]: "#FAF",
  [ATTRIBUTES.LABEL_IN]: "",
  [ATTRIBUTES.LABEL]: "INPUT",
  [ATTRIBUTES.OUTLINE_SIZE]: "0.1rem",
  [ATTRIBUTES.PLACEHOLDER]: "Input",
};

Object.entries(attributes).forEach((attribute) =>
  customInput.setAttribute(attribute[0], attribute[1])
);

document.body.appendChild(customInput);
