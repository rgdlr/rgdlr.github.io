import { getCalendar } from './calendar.js';
import { fetchJsonPromise } from './json.js';

// TODO : could be improved

export function getBookingsMonth({ bookings, date }) {
  const { month, year } = getCalendar({ date });
  const bookingsMonth = bookings.find(
    (booking) => booking.year === year && booking.month === month
  );
  return bookingsMonth;
}

export function getBookingsMonthWithCache() {
  const cache = {};
  return async function ({ date }) {
    const { month, year } = getCalendar({ date });

    if (cache[year] && month in cache[year]) {
      return cache[year][month];
    }

    const bookings = await fetchJsonPromise(
      `/royaltours/src/mocks/bookings/years/${year}/months/${month}.json`
    );
    cache[year] = { ...cache[year], [month]: bookings };
    return bookings;
  };
}

export function getBookingsMonthWithSessionStorage() {
  return async function ({ date }) {
    const { month, year } = getCalendar({ date });
    const key = `${year}:${month}`;

    const bookingsInSessionStorage = window.sessionStorage.getItem(key);
    if (bookingsInSessionStorage) {
      return JSON.parse(bookingsInSessionStorage);
    }

    const bookings = await fetchJsonPromise(
      `/royaltours/src/mocks/bookings/years/${year}/months/${month}.json`
    );

    window.sessionStorage.setItem(key, JSON.stringify(bookings));
    return bookings;
  };
}

export const getBookings = getBookingsMonthWithCache();
