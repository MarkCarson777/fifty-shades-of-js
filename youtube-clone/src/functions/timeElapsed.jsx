export function timeElapsedString(date) {
  const now = new Date();
  const timeDifferenceInmillis = now - date;

  const millisInSecond = 1000;
  const millisInMinute = 60 * millisInSecond;
  const millisInHour = 60 * millisInMinute;
  const millisInDay = 24 * millisInHour;
  const millisInMonth = 30 * millisInDay;
  const millisInYear = 12 * millisInMonth;

  let elapsed, unit, isNew;

  switch (true) {
    case timeDifferenceInmillis >= millisInYear:
      elapsed = Math.floor(timeDifferenceInmillis / millisInYear);
      unit = elapsed === 1 ? "year" : "years";
      isNew = false;
      break;
    case timeDifferenceInmillis >= millisInMonth:
      elapsed = Math.floor(timeDifferenceInmillis / millisInMonth);
      unit = elapsed === 1 ? "month" : "months";
      isNew = false;
      break;
    case timeDifferenceInmillis >= millisInDay:
      elapsed = Math.floor(timeDifferenceInmillis / millisInDay);
      unit = elapsed === 1 ? "day" : "days";
      isNew = false;
      break;
    case timeDifferenceInmillis >= millisInHour:
      elapsed = Math.floor(timeDifferenceInmillis / millisInHour);
      unit = elapsed === 1 ? "hour" : "hours";
      isNew = true;
      break;
    default:
      elapsed = Math.floor(timeDifferenceInmillis / millisInMinute);
      unit = elapsed === 1 ? "minute" : "minutes";
      isNew = true;
      break;
  }

  return { elapsed, unit, isNew };
}
