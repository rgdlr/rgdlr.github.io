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
    appVersion: window.navigator.appVersion,
    bluetooth: window.navigator.bluetooth,
    clipboard: window.navigator.clipboard,
    connection: window.navigator.connection,
    cookieEnabled: window.navigator.cookieEnabled,
    credentials: window.navigator.credentials,
    deviceMemory: window.navigator.deviceMemory,
    doNotTrack: window.navigator.doNotTrack,
    geolocation: window.navigator.geolocation,
    hardwareConcurrency: window.navigator.hardwareConcurrency,
    hid: window.navigator.hid,
    ink: window.navigator.ink,
    keyboard: window.navigator.keyboard,
    language: window.navigator.language,
    languages: window.navigator.languages,
    locks: window.navigator.locks,
    managed: window.navigator.managed,
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
    presentation: window.navigator.presentation,
    product: window.navigator.product,
    productSub: window.navigator.productSub,
    scheduling: window.navigator.scheduling,
    serial: window.navigator.serial,
    serviceWorker: window.navigator.serviceWorker,
    storage: window.navigator.storage,
    usb: window.navigator.usb,
    userActivation: window.navigator.userActivation,
    userAgent: window.navigator.userAgent,
    userAgentData: window.navigator.userAgentData,
    vendor: window.navigator.vendor,
    vendorSub: window.navigator.vendorSub,
    virtualKeyboard: window.navigator.virtualKeyboard,
    wakeLock: window.navigator.wakeLock,
    webdriver: window.navigator.webdriver,
    webkitPersistentStorage: window.navigator.webkitPersistentStorage,
    webkitTemporaryStorage: window.navigator.webkitTemporaryStorage,
    windowControlsOverlay: window.navigator.windowControlsOverlay,
    xr: window.navigator.xr,
    canShare: window.navigator.canShare,
    clearAppBadge: window.navigator.clearAppBadge,
    getBattery: window.navigator.getBattery,
    getGamepads: window.navigator.getGamepads,
    getInstalledRelatedApps: window.navigator.getInstalledRelatedApps,
    getUserMedia: window.navigator.getUserMedia,
    javaEnabled: window.navigator.javaEnabled,
    registerProtocolHandler: window.navigator.registerProtocolHandler,
    requestMIDIAccess: window.navigator.requestMIDIAccess,
    requestMediaKeySystemAccess: window.navigator.requestMediaKeySystemAccess,
    sendBeacon: window.navigator.sendBeacon,
    setAppBadge: window.navigator.setAppBadge,
    share: window.navigator.share,
    unregisterProtocolHandler: window.navigator.unregisterProtocolHandler,
    webkitGetUserMedia: window.navigator.webkitGetUserMedia,
    vibrate: window.navigator.vibrate,
  };
}
