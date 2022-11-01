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
  return window.navigator.geolocation.getCurrentPosition(
    _successCallback,
    _errorCallback,
    _options
  );
}

export function watchPosition() {
  return window.navigator.watchPosition();
}

export function getNavigatorProperties() {
  return {
    appCodeName: window.navigator.appCodeName,
    appName: window.navigator.appName,
    canShare: window.navigator.canShare,
    clipboard: window.navigator.clipboard,
    connection: window.navigator.connection,
    cookieEnabled: window.navigator.cookieEnabled,
    cookieEnabled: window.navigator.cookieEnabled,
    credentials: window.navigator.credentials,
    doNotTrack: window.navigator.doNotTrack,
    geolocation: window.navigator.geolocation,
    getGamepads: window.navigator.getGamepads,
    hardwareConcurrency: window.navigator.hardwareConcurrency,
    language: window.navigator.language,
    languages: window.navigator.languages,
    locks: window.navigator.locks,
    maxTouchPoints: window.navigator.maxTouchPoints,
    mediaCapabilities: window.navigator.mediaCapabilities,
    mediaDevices: window.navigator.mediaDevices,
    mediaSession: window.navigator.mediaSession,
    mimeTypes: window.navigator.mimeTypes,
    onLine: window.navigator.onLine,
    pdfViewerEnabled: window.navigator.pdfViewerEnabled,
    permissions: window.navigator.permissions,
    platform: window.navigator.platform,
    plugins: window.navigator.plugins,
    product: window.navigator.product,
    registerProtocolHandler: window.navigator.registerProtocolHandler,
    requestMediaKeySystemAccess: window.navigator.requestMediaKeySystemAccess,
    sendBeacon: window.navigator.sendBeacon,
    serviceWorker: window.navigator.serviceWorker,
    share: window.navigator.share,
    storage: window.navigator.storage,
    userAgent: window.navigator.userAgent,
    userAgentData: window.navigator.userAgentData,
    vibrate: window.navigator.vibrate,
    webdriver: window.navigator.webdriver,
  };
}
