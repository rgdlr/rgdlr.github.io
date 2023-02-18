"use strict";

export function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

export function getTextFromArray(
  array,
  options = { quoterLeft: "'", quoterRight: "'", separator: ", ", lastSeparator: " and " }
) {
  const quotedArray = array.map(
    (element) => `${options.quoterLeft}${element}${options.quoterRight}`
  );
  const lastElement = quotedArray.pop();
  return `${quotedArray.join(`${options.separator}`)}${options.lastSeparator}${lastElement}`;
}

export async function asyncForEach(array, callback) {
  for (const [index, element] of array.entries()) {
    await callback(element, index, array);
  }
}

export async function arrayPropertyAsyncForEach(callback) {
  for (const [index, element] of this.entries()) {
    await callback(element, index, this);
  }
}

export async function defineArrayPropertyAsyncForEach() {
  const ASYNC_FOR_EACH = "asyncForEach";
  Object.defineProperty(Array.prototype, ASYNC_FOR_EACH, {
    value: arrayPropertyAsyncForEach,
  });
}
