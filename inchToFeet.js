// const myInches = 12;
// const myFeet = myInches / 12 ;
// // console.log(myFeet);


// const dadaInch = 144 ;
// const dadaFeet = dadaInch / 12;
// console.log( 'dadafeet', dadaFeet );

// const dadiInch = 60 ;
// const dadifeet = dadiInch / 12;
// console.log ( 'dadifeetting', dadifeet);


function inchToFeet (inches){

    const feet = inches / 12 ;
    return feet;
}
// upore jehetu kono inch dewa nai sehetu const diye ekta inch dite hobe 
const dadaInch = 140;
// jhetu feet berkorbo sehetu akhon dadafeet dite hobe tar por pura function er name dite hobe 

const dadaFeet = inchToFeet(dadaInch);
// jehetu dadar feet ber korbo sehetu uprer jei 'dadafeet' ache seta dite hobe 

console.log(dadaFeet);

// first example
const nanaInches = 133 ;
const nanafeet = inchToFeet (nanaInches);
console.log ( 'nanafoot', nanafeet  );


