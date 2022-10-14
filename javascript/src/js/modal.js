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

export function initializeModal() {
  const modalAccept = window.document.querySelector(MODAL.SELECTOR.ACCEPT);
  const modalCancel = window.document.querySelector(MODAL.SELECTOR.CANCEL);
  const modalClose = window.document.querySelector(MODAL.SELECTOR.CLOSE);
  const modalOpen = window.document.querySelector(MODAL.SELECTOR.OPEN);

  modalAccept.addEventListener(EVENT.CLICK, closeModal);
  modalCancel.addEventListener(EVENT.CLICK, closeModal);
  modalClose.addEventListener(EVENT.CLICK, closeModal);
  modalOpen.addEventListener(EVENT.CLICK, openModal);
  window.addEventListener(EVENT.KEY_DOWN, closeModal);
}

export function openModal(_event) {
  const modal = window.document.querySelector(MODAL.SELECTOR.MODAL);
  modal.classList.remove(MODAL.CLASS.HIDDEN);
}

export function closeModal(event) {
  if (!event.key || event.key === KEYBOARD.KEY.ESCAPE) {
    const modal = window.document.querySelector(MODAL.SELECTOR.MODAL);
    modal.classList.add(MODAL.CLASS.HIDDEN);
  }
}

export function resetModal(_event) {
  const modalBody = window.document.querySelector(MODAL.SELECTOR.BODY);
  const modalTitle = window.document.querySelector(MODAL.SELECTOR.TITLE);

  modalBody.textContent = "";
  modalTitle.textContent = "";
}
