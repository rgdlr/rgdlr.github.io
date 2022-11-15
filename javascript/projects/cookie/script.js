"use strict";

import {
  initializeModal,
  getCookie,
  MODAL,
  setCookie,
  EVENT,
  removeCookie,
} from "../../src/js/index.js";

const cookieModal = window.document.querySelector(".modal");
const cookieStatus = window.document.querySelector(".cookie-status");
const cookieReset = window.document.querySelector(".cookie-reset");

// TODO : make useCookieStatus a generic function in "javascript/src/js/cookie.js"
function setCookieStatus(status) {
  if (status === true || getCookie("usecookies") === "true") {
    cookieStatus.style.color = "green";
    cookieStatus.style.fontWeight = "bold";
    cookieStatus.textContent = "You agreed cookie usage";
    cookieReset.addEventListener(EVENT.CLICK, (_event) => {
      removeCookie("usecookies");
      setCookieStatus();
    });
  }
  if (status === false || getCookie("usecookies") === "false") {
    cookieStatus.style.color = "red";
    cookieStatus.style.fontWeight = "bold";
    cookieStatus.textContent = "You disagreed cookie usage";
    cookieReset.addEventListener(EVENT.CLICK, (_event) => {
      removeCookie("usecookies");
      setCookieStatus();
    });
  }
  if (status === undefined && getCookie("usecookies") === undefined) {
    cookieModal.classList.remove("hidden");
    cookieStatus.style.color = "orange";
    cookieStatus.style.fontWeight = "bold";
    cookieStatus.textContent = "Cookie usage is pending";
    cookieReset.addEventListener(EVENT.CLICK, (_event) => {
      removeCookie("usecookies");
      setCookieStatus();
    });
  }
  typeof status !== "undefined" && setCookie("usecookies", status);
}

setCookieStatus();

const modal = {
  accept: window.document.querySelector(MODAL.SELECTOR.ACCEPT),
  acceptCallback: () => setCookieStatus(true),
  body: window.document.querySelector(MODAL.SELECTOR.BODY),
  cancel: window.document.querySelector(MODAL.SELECTOR.CANCEL),
  cancelCallback: () => setCookieStatus(false),
  close: window.document.querySelector(MODAL.SELECTOR.CLOSE),
  closeCallback: () => setCookieStatus(),
  footer: window.document.querySelector(MODAL.SELECTOR.FOOTER),
  header: window.document.querySelector(MODAL.SELECTOR.HEADER),
  modal: window.document.querySelector(MODAL.SELECTOR.MODAL),
  title: window.document.querySelector(MODAL.SELECTOR.TITLE),
  window: window.document.querySelector(MODAL.SELECTOR.WINDOW),
};

initializeModal(modal);
