"use strict";

import { getCoordinates } from "../../src/js/index.js";

const UNKNOWN_COORDINATE = "<i>unknown<i>";

const position = {
  latitude: window.document.querySelector(".position-latitude-value"),
  longitude: window.document.querySelector(".position-longitude-value"),
  altitude: window.document.querySelector(".position-altitude-value"),
};

const successCallback = (parameter) => {
  const { coords, timestamp } = parameter;
  const { latitude, longitude, altitude } = coords;

  position.latitude.innerHTML = latitude ?? UNKNOWN_COORDINATE;
  position.longitude.innerHTML = longitude ?? UNKNOWN_COORDINATE;
  position.altitude.innerHTML = altitude ?? UNKNOWN_COORDINATE;
};

getCoordinates(successCallback, successCallback);
