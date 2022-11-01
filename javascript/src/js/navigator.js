"use strict";

export function getGeolocation() {
  return window.navigator.geolocation;
}

export function getCurrentPosition({ position, error, options }) {
  return window.navigator.geolocation.getCurrentPosition(position, error, options);
}

export function getCoordinates(successCallback, errorCallback, options) {
  const _successCallback = (parameter) => {
    const { coords, timestamp } = parameter;
    successCallback({ coords, timestamp });
  };
  const _errorCallback = (parameter) => {
    const { code, message } = parameter;
    errorCallback({ code, message });
  };
  const _options = options ?? {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 1000,
  };
  return window.navigator.geolocation.getCurrentPosition(_successCallback, _errorCallback, _options);
}

export function watchPosition() {
  return window.navigator.watchPosition();
}
