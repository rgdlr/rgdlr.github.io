"use strict";

import { initializeModal, MODAL } from "../../js/index.js";

const modal = {
  accept: window.document.querySelector(MODAL.SELECTOR.ACCEPT),
  body: window.document.querySelector(MODAL.SELECTOR.BODY),
  cancel: window.document.querySelector(MODAL.SELECTOR.CANCEL),
  close: window.document.querySelector(MODAL.SELECTOR.CLOSE),
  footer: window.document.querySelector(MODAL.SELECTOR.FOOTER),
  header: window.document.querySelector(MODAL.SELECTOR.HEADER),
  modal: window.document.querySelector(MODAL.SELECTOR.MODAL),
  open: window.document.querySelector(MODAL.SELECTOR.OPEN),
  title: window.document.querySelector(MODAL.SELECTOR.TITLE),
  window: window.document.querySelector(MODAL.SELECTOR.WINDOW),
};

initializeModal(modal);
