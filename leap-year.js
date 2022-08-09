// problem not solved

function LeapYear (year){

 const remainder = year % 4 ;
 if ( remainder === 0 ){
    return true ;
 }

    else {return false ; }
}
const myLeapYear = LeapYear(2012);
console.log ( myLeapYear )
// console.log ( 'my year',  myYear )

const herLeapYear = LeapYear(1960);

// console.log ('her year',  herYear  )
