"use strict";

import { EVENT } from "./index.js";

function onMediaQueryListMatches(mediaQueryList, callback) {
  if (mediaQueryList.matches) {
    callback();
  }
}

export function matchMediaQueryOnMatches(query, callback) {
  const mediaQueryList = window.matchMedia(query);
  onMediaQueryListMatches(mediaQueryList, callback);
  mediaQueryList.addEventListener(EVENT.CHANGE, (_event) =>
    onMediaQueryListMatches(mediaQueryList, callback)
  );
}

export function matchMediaQuery(query, callback) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener(EVENT.CHANGE, callback);
}
