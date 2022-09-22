"use-strict";

import { snakeCaseToCamelCase } from "./converter.js";

export function wcAttributes(attributes, wc) {
  return Object.entries(attributes).reduce(
    (object, entry) => ({
      ...object,
      [snakeCaseToCamelCase(entry[0])]: wc.getAttribute(entry[1]),
    }),
    {}
  );
}
