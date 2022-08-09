console.log( 3445 / 2);
console.log( 3442 / 2);
console.log( 34245 / 2);
console.log( 34425 / 2);
console.log( 34475 / 2);
console.log( 34475 % 2);


function isEven (number){
    const remainder = number % 2;
    // console.log(remainder);
    if ( remainder === 0 ){
        // console.log('number is odd ');
        return true;
    }


    else{ return false;
     }
        
        
}
 const mynumberiseven  = isEven (303);
 console.log(mynumberiseven);
 const hernumber =  isEven (200);
 console.log(hernumber);
