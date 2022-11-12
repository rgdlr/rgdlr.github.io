"use strict";

import { initializeModal, MODAL } from "../../src/js/index.js";

const cookieStatus = window.document.querySelector(".main-paragraph.cookie-status");

const modal = {
  accept: window.document.querySelector(MODAL.SELECTOR.ACCEPT),
  acceptCallback: () => {
    cookieStatus.style.color = "green";
    cookieStatus.style.fontWeight = "bold";
    cookieStatus.textContent = "You agreed cookie usage";
  },
  body: window.document.querySelector(MODAL.SELECTOR.BODY),
  cancel: window.document.querySelector(MODAL.SELECTOR.CANCEL),
  cancelCallback: () => {
    cookieStatus.style.color = "red";
    cookieStatus.style.fontWeight = "bold";
    cookieStatus.textContent = "You disagreed cookie";
  },
  close: window.document.querySelector(MODAL.SELECTOR.CLOSE),
  closeCallback: () => {
    cookieStatus.style.color = "orange";
    cookieStatus.style.fontWeight = "bold";
    cookieStatus.textContent = "Cookie is pending";
  },
  footer: window.document.querySelector(MODAL.SELECTOR.FOOTER),
  header: window.document.querySelector(MODAL.SELECTOR.HEADER),
  modal: window.document.querySelector(MODAL.SELECTOR.MODAL),
  title: window.document.querySelector(MODAL.SELECTOR.TITLE),
  window: window.document.querySelector(MODAL.SELECTOR.WINDOW),
};

initializeModal(modal);
