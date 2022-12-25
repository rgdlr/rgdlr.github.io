import { $ } from "./selector.js";

export function showModal(modal, callback) {
  const modalId = modal.getAttribute("data-modal-target");
  const modalTrigger = $.attribute(["data-modal-trigger", modalId]);
  modalTrigger.addEventListener("click", (_event) => {
    modal.classList.remove("modal--hidden");
    window.document.body.classList.add("body__modal--open");
    setTimeout(() => modal.firstElementChild.focus(), 250);

    if (typeof callback === "function") {
      callback();
    }
  });
}

export function showModals(modals) {
  modals.forEach((modal) => showModal(modal));
}

export function hideModal(modal, callback) {
  const modalClose = modal.querySelector(".modal__close");
  modalClose.addEventListener("click", (_event) => {
    window.document.body.classList.remove("body__modal--open");
    modal.classList.add("modal--hidden");

    if (typeof callback === "function") {
      callback();
    }
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
