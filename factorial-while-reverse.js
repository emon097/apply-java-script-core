function factorial (number){

    let i = number ;
    let result = 1;
    while ( i >= 1  ){
        result = result * i;
           i--;
           console.log(i);
    }
    return result ;
    }
     const output =  factorial (9);
     console.log(output);
