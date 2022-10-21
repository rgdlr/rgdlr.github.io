"use strict";

import {} from "./index.js";

const INTERSECTION_OBSERVER = {
  DEFAULT: {
    CALLBACK: (entries, observer) => {},
    ELEMENTS: [window.document.body.lastElementChild],
    OPTIONS: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [1],
    },
    ON_ENTRY_INTERSECTION: (entry, observer) => {},
    ON_ENTRY_LEAVING: (entry, observer) => {},
  },
  FIRST_ENTRY: 0,
};

export function addIntersectionObserver({
  callback = INTERSECTION_OBSERVER.DEFAULT.CALLBACK,
  elements = INTERSECTION_OBSERVER.DEFAULT.ELEMENTS,
  onEntryIntersection = INTERSECTION_OBSERVER.DEFAULT.ON_ENTRY_INTERSECTION,
  onEntryLeaving = INTERSECTION_OBSERVER.DEFAULT.ON_ENTRY_LEAVING,
  options = INTERSECTION_OBSERVER.DEFAULT.OPTIONS,
}) {
  const intersectionObserver = new window.IntersectionObserver((entries, observer) => {
    callback(entries, observer);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onEntryIntersection(entry, observer);
      }
      if (!entry.isIntersecting) {
        onEntryLeaving(entry, observer);
      }
    });
  }, options);
  elements.forEach((element) => intersectionObserver.observe(element));
}
