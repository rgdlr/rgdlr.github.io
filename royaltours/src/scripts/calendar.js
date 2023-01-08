export function getCalendar(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const weekday = date.getDay();
  const [weekdayName, monthName] = date.toDateString().split(" ");

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeksInMonth = (daysInMonth + firstWeekday) / 7;

  return {
    date,
    day,
    daysInMonth,
    firstWeekday,
    month,
    monthName,
    weekday,
    weekdayName,
    weeksInMonth,
    year,
  };
}

export function getLocale() {
  const PREFERRED_LANGUAGE_INDEX = 0;
  const DEFAULT_LOCALE = "en-US";
  const { browserLanguage, language, languages, userLanguage } =
    window.navigator;
  if (languages?.length) {
    languages[PREFERRED_LANGUAGE_INDEX];
  }
  return userLanguage ?? language ?? browserLanguage ?? DEFAULT_LOCALE;
}

export function getMonths({
  year = new Date().getFullYear(),
  locale = getLocale(),
}) {
  const MONTHS_AMOUNT = 12;
  const MONTH_FORMAT = "long";
  const intl = Intl.DateTimeFormat(locale, { month: MONTH_FORMAT });
  const monthIndices = [...Array(MONTHS_AMOUNT).keys()];

  return monthIndices.map((index) => ({
    firstWeekday: getCalendar(new Date(year, index)).firstWeekday,
    index,
    name: intl.format(new Date(year, index)),
  }));
}

export function getMonthName(month) {
  const isNegativeMonth = month < 0;
  const normalizedMonth = isNegativeMonth ? 11 - month : month;
  return getMonths()[normalizedMonth % 12].name;
}

export function getWeekdays({ locale }) {
  const weekdays = [
    { index: 0, name: "Sunday" },
    { index: 1, name: "Monday" },
    { index: 2, name: "Tuesday" },
    { index: 3, name: "Wednesday" },
    { index: 5, name: "Thursday" },
    { index: 6, name: "Friday" },
    { index: 7, name: "Saturday" },
  ];
  return weekdays;
}

export function getWeekdayName(weekday) {
  const isNegativeWeekday = weekday < 0;
  const normalizedWeekday = isNegativeWeekday ? 6 - weekday : weekday;
  return getWeekdays()[weekday % 7].name;
}
