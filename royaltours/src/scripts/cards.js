// TODO : new option - make window appear from window center, from width 0
function getCssGapProperty(element) {
  if (element.getBoundingClientRect().width > window.innerWidth / 3) {
    return 0;
  }
  return (
    Number(window.getComputedStyle(element.parentElement).gap.slice(0, -2)) / 2
  );
}

function transformToCenter(element, { onResizeWindow }) {
  const { height, left, top, width } = element.getBoundingClientRect();
  const { innerHeight, innerWidth, pageYOffset } = window;
  const gap = getCssGapProperty(element);

  const translateX = `${innerWidth / 2 - width / 2 - left - gap}px`;
  const translateY = `${
    innerHeight / 2 - height / 2 - top - gap - pageYOffset
  }px`;

  window.document.body.classList.add("body__modal--open");
  element.style.transform = `translate(${translateX}, ${translateY})`;

  if (typeof onResizeWindow !== "function") {
    return;
  }

  element.style.boxShadow = "0 0 0 100em #0003, 0 0 0.75em 0.25em #0005";
  element.style.zIndex = "1";

  setTimeout(() => {
    window.addEventListener("resize", onResizeWindow);
    Array.from(element.parentElement.children).forEach((child) => {
      if (child !== element) {
        child.style.pointerEvents = "none";
      }
    });
  }, 500);
}

function resetTransformToCenter(element, { onResizeWindow }) {
  element.style.boxShadow = "";
  element.style.transform = "";

  if (typeof onResizeWindow !== "function") {
    return;
  }

  setTimeout(() => {
    element.style.zIndex = "";
    window.document.body.classList.remove("body__modal--open");
    window.removeEventListener("resize", onResizeWindow);
    Array.from(element.parentElement.children).forEach((sibling) => {
      sibling.removeAttribute("style");
    });
  }, 500);
}

export function animateCardsWithTransform(cards) {
  Array.from(cards.children).forEach((card) => {
    const onResizeWindow = (_event) => transformToCenter(card, {});
    card.addEventListener("click", (_event) => {
      if (card.style.boxShadow === "") {
        transformToCenter(card, { onResizeWindow });
      } else {
        resetTransformToCenter(card, { onResizeWindow });
      }
    });
  });
}

function positionToCenter(element, { onResizeWindow }) {
  const { height, left, top, width } = element.getBoundingClientRect();
  const { innerHeight, innerWidth, pageYOffset } = window;
  const gap = getCssGapProperty(element);

  window.document.body.classList.add("body__modal--open");
  element.style.left = `${innerWidth / 2 - width / 2 - left - gap}px`;
  element.style.top = `${
    innerHeight / 2 - height / 2 - top - gap - pageYOffset
  }px`;

  if (typeof onResizeWindow !== "function") {
    return;
  }

  element.style.boxShadow = "0 0 0 100em #0003, 0 0 0.75em 0.25em #0005";
  element.style.zIndex = "1";
  setTimeout(() => {
    window.addEventListener("resize", onResizeWindow);
    Array.from(element.parentElement.children).forEach((child) => {
      if (child !== element) child.style.pointerEvents = "none";
    });
  }, 500);
}

function resetPositionToCenter(element, { onResizeWindow }) {
  element.style.boxShadow = "";
  element.style.left = "";
  element.style.top = "";

  if (typeof onResizeWindow !== "function") {
    return;
  }

  setTimeout(() => {
    element.style.zIndex = "";
    window.document.body.classList.remove("body__modal--open");
    window.removeEventListener("resize", onResizeWindow);
    Array.from(element.parentElement.children).forEach((sibling) => {
      sibling.removeAttribute("style");
    });
  }, 500);
}

export function animateCardsWithPosition(cards) {
  Array.from(cards.children).forEach((card) => {
    const onResizeWindow = (_event) => positionToCenter(card, {});
    card.addEventListener("click", (_event) => {
      if (card.style.boxShadow === "") {
        positionToCenter(card, { onResizeWindow });
      } else {
        resetPositionToCenter(card, { onResizeWindow });
      }
    });
  });
}
