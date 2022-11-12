"use strict";

import { EVENT, KEYBOARD, objectClassToSelector, throwCallback } from "./index.js";

const MODAL_CLASS = {
  ACCEPT: "modal-window-footer-accept",
  BODY: "modal-window-body",
  CANCEL: "modal-window-footer-cancel",
  CLOSE: "modal-window-header-close",
  FOOTER: "modal-window-footer",
  HEADER: "modal-window-header",
  HIDDEN: "hidden",
  MODAL: "modal",
  OPEN: "modal-open",
  TITLE: "modal-window-header-title",
  WINDOW: "modal-window",
};

// Adding "...MODAL_CLASS" helps with IDE autocomplete when accessing the object
export const MODAL = {
  CLASS: MODAL_CLASS,
  SELECTOR: { ...MODAL_CLASS, ...objectClassToSelector(MODAL_CLASS) },
};

// TODO : decouple functionality, elements as arguments, classes outside, etc.

export function initializeModal({
  accept,
  acceptCallback,
  cancel,
  cancelCallback,
  close,
  closeCallback,
  modal,
  open,
  openCallback,
}) {
  accept &&
    accept.addEventListener(EVENT.CLICK, (event) => {
      acceptCallback && throwCallback(acceptCallback);
      closeModal(event, { modal });
    });
  cancel &&
    cancel.addEventListener(EVENT.CLICK, (event) => {
      cancelCallback && throwCallback(cancelCallback);
      closeModal(event, { modal });
    });
  close &&
    close.addEventListener(EVENT.CLICK, (event) => {
      closeCallback && throwCallback(closeCallback);
      closeModal(event, { modal });
    });
  open &&
    open.addEventListener(EVENT.CLICK, (event) => {
      openCallback && throwCallback(openCallback);
      openModal(event, { modal });
    });

  window.addEventListener(EVENT.KEY_DOWN, (event) => closeModal(event, { modal }));
}

export function openModal(_event, { modal }) {
  modal.classList.remove(MODAL.CLASS.HIDDEN);
}

export function closeModal(event, { modal }) {
  if (!event.key || event.key === KEYBOARD.KEY.ESCAPE) {
    modal.classList.add(MODAL.CLASS.HIDDEN);
  }
}

export function resetModal(_event, { body, title }) {
  body.textContent = "";
  title.textContent = "";
}
