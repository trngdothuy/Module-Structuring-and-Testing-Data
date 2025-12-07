// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(-2));

  if (hours > 24 || hours == 24 && minutes > 0 | hours < 0 || minutes < 0 || minutes > 59 || time.length > 5) {
    return "Time must be in format hours:minutes where 0 =< hours =< 24 and 0 < minutes < 59"
  }  
  if (hours == 0 && minutes == 0 || hours == 24 && minutes == 0) {
    return `12:00 am`
  }
  if (hours == 12 && minutes == 0) {
    return "12:00 pm"
  }
  
  if (hours > 12) {
    return `${hours - 12}:${minutes.toString().padStart(2, "0")} pm`;
  }
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("24:00");
const targetOutput5 = "12:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("24:10");
const targetOutput6 = "Time must be in format hours:minutes where 0 =< hours =< 24 and 0 < minutes < 59";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("25:00");
console.assert(
  currentOutput7 === targetOutput6,
  `current output: ${currentOutput7}, target output: ${targetOutput6}`
);

const currentOutput8 = formatAs12HourClock("-01:00");
console.assert(
  currentOutput8 === targetOutput6,
  `current output: ${currentOutput8}, target output: ${targetOutput6}`
);

const currentOutput9 = formatAs12HourClock("08:-01");
console.assert(
  currentOutput9 === targetOutput6,
  `current output: ${currentOutput9}, target output: ${targetOutput6}`
);

const currentOutput10 = formatAs12HourClock("08:60");
console.assert(
  currentOutput10 === targetOutput6,
  `current output: ${currentOutput10}, target output: ${targetOutput6}`
);