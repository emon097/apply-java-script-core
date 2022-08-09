// function GetSum (numbers){
// console.log(number);
// let sum = 0;
// for ( let i = 0; i< numbers.length; i++  ){
//  const index = i ;
//  const element = numbers[index]
//  sum = sum + element ;
//  console.log(index, element, sum );
// }

// }



function getoddofanarray (numbers){
const oddNumber = [];

for( let i = 0; i< numbers.length ; i++  ){
const index = i ;
const element = numbers[index];


if ( element % 2 !== 0 ){

    console.log( index, element);  
oddNumber.push(element);

}

    }
    return oddNumber;
}

const mynumber = [ 23, 74, 29, 38, 20, 99, 33 ];
const oddNumber = getoddofanarray(mynumber);
console.log(oddNumber);
  
 const getoddnumbersum = getoddofanarray (mynumber);
 console.log ( 'odd number sum', getoddnumbersum )
// GetSum (mynumber);