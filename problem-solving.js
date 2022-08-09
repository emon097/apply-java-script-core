// problem-1
function timeMake(timehrs) {
  const timetosec = timehrs * 60 * 60;
  return timetosec;
}
const hrstomin = timeMake(1);
console.log(hrstomin);

//  problem-2

// function findLeapYear( year1, year2, year3, year4, year5 ){

// //  const remainder = year1 % 4 ;
// // if ( remainder === 0 ){

// // }

// }

// function getleapyear(year) {
//   if (year % 4 == 0) {
//     if (year % 100 == 0) {
//       if (year % 400 == 0) {
//         console.log(year, "is leap year");
//       } else {
//         console.log(year, "is not leap year ");
//       }
//     } else {
//       console.log(year, "is leap year");
//     }
//   } else {
//     console.log(year, "is not leap year");
//   }
// }

// getleapyear(1997);

// ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
