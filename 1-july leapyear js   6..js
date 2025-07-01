let year = 2025; // Change this to any year you want to check

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
