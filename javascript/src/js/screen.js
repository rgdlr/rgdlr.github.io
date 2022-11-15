"use strict";

export function getScreenProperties() {
  const { availHeight, availWidth, colorDepth, height, pixelDepth, width } = window.screen;
  const { innerHeight, innerWidth } = window;
  return {
    availHeight,
    availWidth,
    colorDepth,
    height,
    innerHeight,
    innerWidth,
    pixelDepth,
    width,
  };
}
