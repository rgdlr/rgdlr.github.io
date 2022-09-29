"use strict";

export function snakeCaseToCamelCase(string) {
  return string
    .toLowerCase()
    .replace(/_\w/g, ($1) => $1.toUpperCase().replace("_", ""));
}
