"use strict";

import { ELEMENT, objectValuesToUpperCase } from "./index.js";

// Adding "...ELEMENT" helps with IDE autocomplete when accessing the object
export const NODE = { ...ELEMENT, ...objectValuesToUpperCase(ELEMENT) };
