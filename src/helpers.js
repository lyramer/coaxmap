const BLANK_MONTH = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false,
  26: false,
  27: false,
  28: false,
  29: false,
  30: false,
  31: false
};

const BLANK_YEAR = {
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {},
  11: {}
};
// quick function to get the number of days in a month
// note that year is required due to leap years...
export function getNumDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// does preliminary processing from txt file into json
export function getDateJson(dateArr) {
  return dateArr.map(date => {
    let parsedDate = date.split("-");
    return {
      year: Number(parsedDate[0]),
      month: Number(parsedDate[1]) - 1,
      date: Number(parsedDate[2])
    };
  });
}

// creates a more functional json object where each year
// is a property having months as subproperties
// and each month has a day with a t/f flag
// where only days with data will have a 'true' flag
export function createValidDateList(dates) {
  let dateList = {};
  dates.forEach(d => {
    // check to see if year exists
    if (!dateList[d.year]) {
      dateList[d.year] = JSON.parse(JSON.stringify(BLANK_YEAR));
      for (let m = 0; m < 12; m++) {
        dateList[d.year][m] = JSON.parse(JSON.stringify(BLANK_MONTH));
      }
    }

    // flag all dates contained in list as true
    if (!dateList[d.year][d.month][d.date]) {
      dateList[d.year][d.month][d.date] = true;
    }
  });
  return dateList;
}

// creates the path to the image on the server to be rendered by Leaflet
export function getImgPath(date) {
  let y = date.getFullYear().toString();
  let m = (date.getMonth() + 1).toString();
  let d = date.getDate().toString();
  d.length === 1 && (d = "0" + d);
  m.length === 1 && (m = "0" + m);
  return "/overlays/" + y + "/" + m + "/" + d + "/overlay.png";
}