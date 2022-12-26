import { $ } from "./selector.js";

function changeFocusOnToggleModal(modal, modalWindow, trigger) {
  modalWindow.setAttribute("tabindex", "-1");
  modal.addEventListener("transitionend", (_event) => {
    if (modal.classList.contains("modal--hidden")) {
      trigger.focus();
    } else if (trigger === window.document.activeElement) {
      modalWindow.focus();
    }
  });
}

function getFocusableElements(container = window.document) {
  const focusableElementsQuery =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  return container.querySelectorAll(focusableElementsQuery);
}

function limitFocusOnShowModal(modalWindow) {
  modalWindow.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = [
      modalWindow,
      ...getFocusableElements(modalWindow),
    ].filter((elem) => !elem.getAttribute("style")?.includes("display: none"));

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

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

function showModalOnClickTrigger(modal, trigger, callback) {
  trigger.addEventListener("click", (_event) => {
    window.document.body.classList.add("body__modal--open");
    modal.classList.remove("modal--hidden");

    if (typeof callback === "function") {
      callback();
    }
  });
}

export function allowShowModal(modal, callback) {
  const modalWindow = modal.firstElementChild;
  const modalId = modal.getAttribute("data-modal-target");
  const modalTrigger = $.attribute(["data-modal-trigger", modalId]);

  showModalOnClickTrigger(modal, modalTrigger, callback);
  limitFocusOnShowModal(modalWindow);
  changeFocusOnToggleModal(modal, modalWindow, modalTrigger);
}

export function allowShowModals(modals) {
  modals.forEach((modal) => allowShowModal(modal));
}

function enableHideModal(modal, callback) {
  window.document.body.classList.remove("body__modal--open");
  modal.classList.add("modal--hidden");

  if (typeof callback === "function") {
    callback();
  }
}

export function allowHideModal(modal, callback) {
  const modalClose = modal.querySelector(".modal__close");
  modalClose.addEventListener("click", (_event) =>
    enableHideModal(modal, callback)
  );

  // modal.addEventListener("keydown", ({ key }) => {
  //   enableHideModal(modal, () => {
  //     if (key !== "Escape" && key !== "Q" && key !== "q") {
  //       return;
  //     }
  //     callback();
  //   });
  // });

  modal.addEventListener("keydown", ({ key }) => {
    if (key !== "Escape" && key !== "Q" && key !== "q") {
      return;
    }
    enableHideModal(modal, callback);
  });
}

export function allowHideModals(modals) {
  modals.forEach((modal) => allowHideModal(modal));
}

export function initModals() {
  const modals = $.all(".modal");
  allowShowModals(modals);
  allowHideModals(modals);
}
