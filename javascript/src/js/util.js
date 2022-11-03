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
