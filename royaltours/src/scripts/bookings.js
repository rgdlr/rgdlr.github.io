import { getCalendar } from "./calendar.js";
import { fetchJsonPromise } from "./json.js";

// TODO : JUST IMPROVE EVERYTHING

export function getBookingsMonth({ bookings, date }) {
  const { month, year } = getCalendar({ date });
  const bookingsMonth = bookings.find(
    (booking) => booking.year === year && booking.month === month
  );
  return bookingsMonth;
}

export function getBookingsWithCache() {
  const cache = {};
  return async function ({ date }) {
    const { month, year } = getCalendar({ date });
    const months = month < 6 ? "01-06" : "07-12";
    const endpoint = `${year}:${months}`;

    if (endpoint in cache) {
      return getBookingsMonth({
        bookings: cache[endpoint],
        date,
      });
    }

    const bookings = await fetchJsonPromise(
      `/royaltours/src/mocks/bookings/${endpoint}.json`
    );
    cache[endpoint] = bookings;
    return getBookingsMonth({ bookings, date });
  };
}

export function getBookingsWithSessionStorage() {
  return async function ({ date }) {
    const { month, year } = getCalendar({ date });
    const months = month < 6 ? "01-06" : "07-12";
    const endpoint = `${year}:${months}`;

    const bookingsInSessionStorage = window.sessionStorage.getItem(endpoint);
    if (bookingsInSessionStorage) {
      return getBookingsMonth({
        bookings: JSON.parse(bookingsInSessionStorage),
        date,
      });
    }

    const bookings = await fetchJsonPromise(
      `/royaltours/src/mocks/bookings/${endpoint}.json`
    );

    window.sessionStorage.setItem(endpoint, JSON.stringify(bookings));
    return getBookingsMonth({ bookings, date });
  };
}

// TODO : IMPORTANT TO IMPROVE
export const getBookings = getBookingsWithCache();
