"use strict";

import {} from "./index.js";

// TODO : cookie RGPD and ePrivacy fulfillment

// TODO : parse options - example: maxAge should be set as "max-age=seconds"
export function setCookie(
  name,
  value,
  options = {} || {
    domain,
    path,
    expires,
    maxAge,
    size,
    httpOnly,
    secure,
    sameSite,
    sameParty,
    partitionKey,
    priority,
  }
) {
  if (Object.entries(options).some((option) => option)) {
    cookieOptions = Object.entries(options).reduce(
      (previousCookieOptions, [key, value]) => `${previousCookieOptions};${key}=${value}`,
      ""
    );
    window.document.cookie = `${name}=${value}${cookieOptions}`;
  } else {
    window.document.cookie = `${name}=${value}`;
  }
}

export function getCookies() {
  const cookies = window.document.cookie;

  if (!cookies) {
    return {};
  }

  const COOKIES_SEPARATOR = ";";
  const COOKIE_KEY_VALUE_SEPARATOR = "=";

  const cookiesToArray = cookies.split(COOKIES_SEPARATOR);
  const cookiesToArrayEntries = cookiesToArray.map((cookie) => {
    const [name, value] = cookie.split(COOKIE_KEY_VALUE_SEPARATOR);
    return [name.trim(), value.trim()];
  });

  return Object.fromEntries(cookiesToArrayEntries);
}

export function getCookie(name) {
  return getCookies()[name];
}

export function removeCookie(name) {
  window.document.cookie = `${name}=0;max-age=0`;
}
