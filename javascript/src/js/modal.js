"use strict";

import { EVENT, KEYBOARD, objectClassToSelector } from "./index.js";

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

export function initializeModal({ accept, cancel, close, modal, open }) {
  accept.addEventListener(EVENT.CLICK, (event) => closeModal(event, { modal }));
  cancel.addEventListener(EVENT.CLICK, (event) => closeModal(event, { modal }));
  close.addEventListener(EVENT.CLICK, (event) => closeModal(event, { modal }));
  open.addEventListener(EVENT.CLICK, (event) => openModal(event, { modal }));

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
