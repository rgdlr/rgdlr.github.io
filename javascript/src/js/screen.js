"use strict";

export function getScreenProperties() {
  const { innerHeight, innerWidth } = window;
  const { availHeight, availWidth, colorDepth, height, pixelDepth, width } = window.screen;
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
