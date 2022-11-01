"use strict";

import { EVENT, throwCallback } from "./index.js";

function onMediaQueryListMatches(mediaQueryList, callback) {
  if (mediaQueryList.matches) {
    throwCallback(callback);
  }
}

export function matchMediaQueryOnMatches(query, callback) {
  const mediaQueryList = window.matchMedia(query);
  onMediaQueryListMatches(mediaQueryList, callback);
  mediaQueryList.addEventListener(EVENT.CHANGE, (_event) =>
    onMediaQueryListMatches(mediaQueryList, callback)
  );
  return mediaQueryList;
}

export function matchMediaQuery(query, callback) {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener(EVENT.CHANGE, callback);
  return mediaQueryList;
}
