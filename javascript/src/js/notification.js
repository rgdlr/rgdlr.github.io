"use strict";

import { EVENT, throwEventCallback } from "./index.js";

const NOTIFICATION = {
  PERMISSION: {
    DEFAULT: "default",
    DENIED: "denied",
    GRANTED: "granted",
  },
  TITLE: "Notification title",
  OPTIONS: {
    body: "Notification body",
    icon: "",
    dir: "ltr" | "rtl" | "auto",
  },
};

// NOTE : user should have OS notification turned on to work properly
// TODO : could use "alert" function when "Notification" is DENIED

export async function checkNotification() {
  const notification = window.Notification;
  if (!("Notification" in window || notification)) {
    throw new Error("Notifications are not available in browser");
  }
  if (notification.permission === NOTIFICATION.PERMISSION.DEFAULT) {
    await notification.requestPermission((permission) => {});
    if (notification.permission === NOTIFICATION.PERMISSION.DEFAULT) {
      throw new Error("Notifications are disabled by default");
    }
  }
  if (notification.permission === NOTIFICATION.PERMISSION.DENIED) {
    throw new Error("Notifications are not allowed by user");
  }
  if (notification.permission === NOTIFICATION.PERMISSION.GRANTED) {
    return notification.permission;
  }
}

export function notify(
  title = NOTIFICATION.TITLE,
  options = NOTIFICATION.OPTIONS,
  callbacks = { onClick: () => {}, onClose: () => {}, onError: () => {}, onShow: () => {} }
) {
  checkNotification();
  const notification = new Notification(title, options);
  notification.addEventListener(EVENT.CLICK, (event) => {
    window.parent.focus();
    notification.close();
    throwEventCallback(onClick, event);
  });
  notification.addEventListener(EVENT.CLOSE, (event) => throwEventCallback(onClose, event));
  notification.addEventListener(EVENT.ERROR, (event) => throwEventCallback(onError, event));
}

export function useNotification(title = NOTIFICATION.TITLE, options = NOTIFICATION.OPTIONS) {
  if (window.document.visibilityState === "visible") {
    return;
  }
  notify(title, options);
}

export function forceNotification(title = NOTIFICATION.TITLE, options = NOTIFICATION.OPTIONS) {
  notify(title, options);
}
