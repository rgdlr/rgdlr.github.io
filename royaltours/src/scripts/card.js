function getCssGapProperty(element) {
  if (element.getBoundingClientRect().width > window.innerWidth / 3) {
    return 0;
  }
  return Number(window.getComputedStyle(element.parentElement).gap.slice(0, -2)) / 2;
}

function transformToCenter(element, { onResizeWindow }) {
  const { height, left, top, width } = element.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  const gap = getCssGapProperty(element);

  const translateX = `${innerWidth / 2 - width / 2 - left - gap}px`;
  const translateY = `${innerHeight / 2 - height / 2 - top - gap}px`;

  window.document.body.classList.add('body__modal--open');
  element.style.transform = `translate(${translateX}, ${translateY})`;

  if (typeof onResizeWindow !== 'function') {
    return;
  }

  element.style.boxShadow = '0 0 0 100em #0003, 0 0 0.75em 0.25em #0005';
  element.style.zIndex = '1';

  setTimeout(() => {
    // TODO : set position to window center on window resize
    window.addEventListener('resize', onResizeWindow);
    Array.from(element.parentElement.children).forEach((sibling) => {
      if (sibling !== element) sibling.style.pointerEvents = 'none';
    });
  }, 500);
}

function resetTransformToCenter(element, { onResizeWindow }) {
  element.style.boxShadow = '';
  element.style.transform = '';

  if (typeof onResizeWindow !== 'function') {
    return;
  }

  setTimeout(() => {
    element.style.zIndex = '';
    window.document.body.classList.remove('body__modal--open');
    window.removeEventListener('resize', onResizeWindow);
    Array.from(element.parentElement.children).forEach((sibling) => {
      sibling.removeAttribute('style');
    });
  }, 500);
}

export function animateCardsWithTransform(cards) {
  Array.from(cards.children).forEach((card) => {
    const onResizeWindow = (_event) => transformToCenter(card, {});
    card.addEventListener('click', (_event) => {
      if (card.style.boxShadow === '') {
        transformToCenter(card, { onResizeWindow });
      } else {
        resetTransformToCenter(card, { onResizeWindow });
      }
    });
  });
}

function positionToCenter(element, { onResizeWindow }) {
  const { height, left, top, width } = element.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  const gap = getCssGapProperty(element);

  window.document.body.classList.add('body__modal--open');
  element.style.left = `${innerWidth / 2 - width / 2 - left - gap}px`;
  element.style.top = `${innerHeight / 2 - height / 2 - top - gap}px`;

  if (typeof onResizeWindow !== 'function') {
    return;
  }

  element.style.boxShadow = '0 0 0 100em #0003, 0 0 0.75em 0.25em #0005';
  element.style.zIndex = '1';
  setTimeout(() => {
    window.addEventListener('resize', onResizeWindow);
    Array.from(element.parentElement.children).forEach((sibling) => {
      if (sibling !== element) sibling.style.pointerEvents = 'none';
    });
  }, 500);
}

function resetPositionToCenter(element, { onResizeWindow }) {
  element.style.boxShadow = '';
  element.style.left = '';
  element.style.top = '';

  if (typeof onResizeWindow !== 'function') {
    return;
  }

  setTimeout(() => {
    element.style.zIndex = '';
    window.document.body.classList.remove('body__modal--open');
    window.removeEventListener('resize', onResizeWindow);
    Array.from(element.parentElement.children).forEach((sibling) => {
      sibling.removeAttribute('style');
    });
  }, 500);
}

export function animateCardsWithPosition(cards) {
  Array.from(cards.children).forEach((card) => {
    const onResizeWindow = (_event) => positionToCenter(card, {});
    card.addEventListener('click', (_event) => {
      if (card.style.boxShadow === '') {
        positionToCenter(card, { onResizeWindow });
      } else {
        resetPositionToCenter(card, { onResizeWindow });
      }
    });
  });
}

function cloneToCenter(element, clone, { onResizeWindow }) {
  const { height, width } = clone.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  clone.style.left = `${innerWidth / 2 - width / 2}px`;
  clone.style.top = `${innerHeight / 2 - height / 2}px`;

  if (typeof onResizeWindow !== 'function') {
    return;
  }

  clone.style.boxShadow = '0 0 0 100em #0003, 0 0 0.75em 0.25em #0005';
  // TODO : set position to window center taking new width
  // clone.style.width = "min(35em, calc((100vw - 1em)))";
  clone.addEventListener('click', () => resetCloneToCenter(element, clone, { onResizeWindow }));
  window.addEventListener('resize', onResizeWindow);
  window.document.body.classList.add('body__modal--open');
}

function resetCloneToCenter(element, clone, { onResizeWindow }) {
  const elementSiblings = Array.from(element.parentNode.children);
  const { left, top, width } = element.getBoundingClientRect();

  clone.style.boxShadow = '';
  clone.style.left = `${left}px`;
  clone.style.position = 'fixed';
  clone.style.top = `${top}px`;
  clone.style.width = `${width}px`;
  element.style.opacity = '0';
  window.document.body.classList.remove('body__modal--open');

  if (typeof onResizeWindow !== 'function') {
    element.parentElement.appendChild(clone);
    elementSiblings.forEach((sibling) => {
      if (sibling !== clone) sibling.style.pointerEvents = 'none';
    });
    return;
  }

  setTimeout(() => {
    window.removeEventListener('resize', onResizeWindow);
    elementSiblings.forEach((sibling) => sibling.removeAttribute('style'));
    clone.remove();
  }, 500);
}

export function animateCardsWithCloneNode(cards) {
  const IS_DEEP_CLONE = true;
  Array.from(cards.children).forEach((card) => {
    const clone = card.cloneNode(IS_DEEP_CLONE);
    const onResizeWindow = (_event) => cloneToCenter(card, clone, {});
    card.addEventListener('click', (_event) => {
      resetCloneToCenter(card, clone, {});
      cloneToCenter(card, clone, { onResizeWindow });
    });
  });
}
