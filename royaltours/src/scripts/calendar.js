import { $ } from "./selector.js";

// ------------------------- CALENDAR FUNCTIONS -------------------------

export function getCalendar(
  { date = new Date(), locale = getLocale() } = {
    date: new Date(),
    locale: getLocale(),
  }
) {
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

export function getMonths(
  { year = new Date().getFullYear(), locale = getLocale() } = {
    year: new Date().getFullYear(),
    locale: getLocale(),
  }
) {
  const MONTHS_AMOUNT = 12;
  const MONTH_FORMAT = "long";
  const intl = Intl.DateTimeFormat(locale, { month: MONTH_FORMAT });
  const monthIndices = [...Array(MONTHS_AMOUNT).keys()];

  return monthIndices.map((index) => ({
    abbreviation: intl.format(new Date(year, index)).slice(0, 3),
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

// TODO : use i18n
export function getWeekdays(
  { locale = getLocale() } = { locale: getLocale() }
) {
  const weekdays = [
    { abbreviation: "Sun", index: 0, name: "Sunday" },
    { abbreviation: "Mon", index: 1, name: "Monday" },
    { abbreviation: "Tue", index: 2, name: "Tuesday" },
    { abbreviation: "Wed", index: 3, name: "Wednesday" },
    { abbreviation: "Thu", index: 5, name: "Thursday" },
    { abbreviation: "Fri", index: 6, name: "Friday" },
    { abbreviation: "Sat", index: 7, name: "Saturday" },
  ];
  return weekdays;
}

export function getWeekdayName(weekday) {
  const isNegativeWeekday = weekday < 0;
  const normalizedWeekday = isNegativeWeekday ? 6 - weekday : weekday;
  return getWeekdays()[normalizedWeekday % 7].name;
}

// TODO : could be improved
function getCalendarDate(
  {
    element = $(".calendar__date"),
    order = "yyyy/mm/dd",
    separator = "·",
    type = "number" || "string",
  } = {
    element: $(".calendar__date"),
    order: "yyyy/mm/dd",
    separator: "·",
    type: "number" || "string",
  }
) {
  const [year, month, day] = element.innerText
    .replaceAll("\n", "")
    .split(separator)
    .map((dateElement) => Number(dateElement));
  return { day, month, year };
}

// TODO : could be improved
export const monthdayStatusClasses = {
  available: "calendar__monthday--available",
  disabled: "calendar__monthday--disabled",
  end: "calendar__monthday--end",
  selected: "calendar__monthday--selected",
  start: "calendar__monthday--start",
  unavailable: "calendar__monthday--unavailable",
};

export function getDateFromQueryParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const year = Number(urlSearchParams.get("year"));
  const month = Number(urlSearchParams.get("month"));
  if (year && month) {
    return new Date(year, month);
  }
  return new Date();
}

// ------------------------- CALENDAR GRID -------------------------

// ------------------------- CALENDAR TABLE -------------------------

export function createCalendarWithTable(
  { container = $(".calendar--table"), date = new Date() } = {
    container: $(".calendar--table"),
    date: new Date(),
  }
) {
  const documentFragment = window.document.createDocumentFragment();

  const calendarHeader = createCalendarHeader(date);
  const calendarBody = createCalendarBody(date);
  const calendarFooter = createCalendarFooter();

  documentFragment.appendChild(calendarHeader);
  documentFragment.appendChild(calendarBody);
  documentFragment.appendChild(calendarFooter);

  Array.from(container.children).forEach((child) =>
    container.removeChild(child)
  );
  container.appendChild(documentFragment);
}

function createCalendarHeader(date) {
  const calendarHeader = window.document.createElement("header");
  const previousGroup = window.document.createElement("div");
  const previousYear = window.document.createElement("button");
  const previousMonth = window.document.createElement("button");
  const currentDate = window.document.createElement("span");
  const nextGroup = window.document.createElement("div");
  const nextMonth = window.document.createElement("button");
  const nextYear = window.document.createElement("button");

  previousYear.classList.add("calendar__button");
  previousYear.classList.add("calendar__button--previous-year");
  previousYear.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
  previousYear.addEventListener("click", (_event) => {
    const [year, month, day] = window.document
      .querySelector(".calendar__date")
      .innerText.split("·");

    createCalendarWithTable({
      date: new Date(Number(year) - 1, Number(month) - 1, day),
    });
  });

  previousMonth.classList.add("calendar__button");
  previousMonth.classList.add("calendar__button--previous-month");
  previousMonth.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  previousMonth.addEventListener("click", (_event) => {
    const [year, month, day] = window.document
      .querySelector(".calendar__date")
      .innerText.split("·");

    createCalendarWithTable({
      date: new Date(year, Number(month) - 1 - 1, day),
    });
  });

  nextMonth.classList.add("calendar__button");
  nextMonth.classList.add("calendar__button--next-month");
  nextMonth.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
  nextMonth.addEventListener("click", (_event) => {
    const [year, month, day] = window.document
      .querySelector(".calendar__date")
      .innerText.split("·");

    createCalendarWithTable({ date: new Date(year, month, day) });
  });

  nextYear.classList.add("calendar__button");
  nextYear.classList.add("calendar__button--next-year");
  nextYear.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
  nextYear.addEventListener("click", (_event) => {
    const [year, month, day] = window.document
      .querySelector(".calendar__date")
      .innerText.split("·");

    createCalendarWithTable({
      date: new Date(Number(year) + 1, Number(month) - 1, day),
    });
  });

  const { day, month, year } = getCalendar({ date });

  previousGroup.classList.add("calendar__button-group");
  previousGroup.appendChild(previousYear);
  previousGroup.appendChild(previousMonth);

  currentDate.classList.add("calendar__date");
  currentDate.innerText = `${year} · ${month + 1} · ${day}`;

  nextGroup.classList.add("calendar__button-group");
  nextGroup.appendChild(nextMonth);
  nextGroup.appendChild(nextYear);

  calendarHeader.classList.add("calendar__header");
  calendarHeader.appendChild(previousGroup);
  calendarHeader.appendChild(currentDate);
  calendarHeader.appendChild(nextGroup);

  return calendarHeader;
}

function createCalendarBody(date) {
  const calendarTable = createCalendarTable(date);
  calendarTable.classList.add("calendar__body");
  return calendarTable;
}

function createCalendarFooter() {
  const calendarFooter = window.document.createElement("footer");
  calendarFooter.classList.add("calendar__footer");
  return calendarFooter;
}

function createCalendarTable(date) {
  const calendarTable = window.document.createElement("table");

  const calendarTableHead = createCalendarTableHead();
  const calendarTableBody = createCalendarTableBody(date);
  const calendarTableFooter = createCalendarTableFooter();

  calendarTable.appendChild(calendarTableHead);
  calendarTable.appendChild(calendarTableBody);
  calendarTable.appendChild(calendarTableFooter);

  return calendarTable;
}

function createCalendarTableHead() {
  const calendarTableHead = window.document.createElement("thead");
  const calendarTableHeadRow = window.document.createElement("tr");
  calendarTableHeadRow.classList.add("calendar__weekdays");

  getWeekdays({ locale: "en-US" }).forEach((weekday) => {
    const calendarTableHeadHead = window.document.createElement("th");
    calendarTableHeadHead.classList.add("calendar__weekday");
    calendarTableHeadHead.innerText = weekday.name.slice(0, 3);
    calendarTableHeadRow.appendChild(calendarTableHeadHead);
  });

  calendarTableHead.appendChild(calendarTableHeadRow);
  return calendarTableHead;
}

function getCalendarTableWeek(week, daysInMonth, offset) {
  const calendarTableWeekRow = window.document.createElement("tr");
  calendarTableWeekRow.classList.add("calendar__monthdays");
  for (let weekDay = 1; weekDay <= 7; weekDay++) {
    const monthDay = weekDay + week * 7 - offset;
    if (monthDay > daysInMonth) {
      break;
    }
    const calendarTableBodyData = window.document.createElement("td");
    if (week !== 0 || weekDay > offset) {
      calendarTableBodyData.tabIndex = "0";
      calendarTableBodyData.innerText = monthDay;
      calendarTableBodyData.classList.add("calendar__monthday");
    }
    calendarTableWeekRow.appendChild(calendarTableBodyData);
  }
  return calendarTableWeekRow;
}

function createCalendarTableBody(date) {
  const calendarTableBody = window.document.createElement("tbody");
  const { daysInMonth, firstWeekday, weeksInMonth } = getCalendar({
    date,
  });
  for (let week = 0; week < weeksInMonth; week++) {
    const calendarTableBodyRow = getCalendarTableWeek(
      week,
      daysInMonth,
      firstWeekday
    );
    calendarTableBody.appendChild(calendarTableBodyRow);
  }
  return calendarTableBody;
}

function createCalendarTableFooter() {
  const calendarTableFooter = window.document.createElement("tfoot");
  return calendarTableFooter;
}
