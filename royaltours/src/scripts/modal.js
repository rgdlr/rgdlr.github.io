import { $ } from "./selector.js";

function focusElementsOnToggleModal(modal, modalWindow, trigger) {
  modal.addEventListener("transitionend", (_event) => {
    if (trigger === window.document.activeElement) {
      modalWindow.focus();
    }
    if (modal.classList.contains("modal--hidden")) {
      trigger.focus();
    }
  });
}

function getFocusableElements(container = window.document) {
  const focusableElementsQuery =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  return container.querySelectorAll(focusableElementsQuery);
}

function limitFocusableElementsToOpenModal(modalWindow) {
  modalWindow.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = [
      modalWindow,
      ...getFocusableElements(modalWindow),
    ].filter((elem) => !elem.getAttribute("style")?.includes("display: none"));

    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    if (event.target === firstFocusable && event.shiftKey) {
      event.preventDefault();
      lastFocusable.focus();
    }
    if (event.target === lastFocusable && !event.shiftKey) {
      event.preventDefault();
      firstFocusable.focus();
    }
  });
}

function openModal(modal, trigger, callback) {
  const modalWindow = modal.firstElementChild;
  window.document.body.classList.add("body__modal--open");
  modal.classList.remove("modal--hidden");
  modalWindow.setAttribute("tabindex", "-1");

  if (typeof callback === "function") {
    callback();
  }

  focusElementsOnToggleModal(modal, modalWindow, trigger);
  limitFocusableElementsToOpenModal(modalWindow);
}

export function showModal(modal, callback) {
  const modalId = modal.getAttribute("data-modal-target");
  const modalTrigger = $.attribute(["data-modal-trigger", modalId]);
  modalTrigger.addEventListener("click", (_event) =>
    openModal(modal, modalTrigger, callback)
  );
}

export function showModals(modals) {
  modals.forEach((modal) => showModal(modal));
}

function closeModal(modal, callback) {
  window.document.body.classList.remove("body__modal--open");
  modal.classList.add("modal--hidden");

  if (typeof callback === "function") {
    callback();
  }
}

export function hideModal(modal, callback) {
  const modalClose = modal.querySelector(".modal__close");
  modalClose.addEventListener("click", (_event) => closeModal(modal, callback));

  modal.addEventListener("keydown", ({ key }) => {
    if (key !== "Escape" && key !== "Q" && key !== "q") {
      return;
    }
    closeModal(modal, callback);
  });
}

export function hideModals(modals) {
  modals.forEach((modal) => hideModal(modal));
}

export function initModals() {
  const modals = $.all(".modal");
  showModals(modals);
  hideModals(modals);
}
