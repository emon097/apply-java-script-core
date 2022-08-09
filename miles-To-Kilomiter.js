function MilesToKilomiter (miles){
    const kilomiter = miles * 1.609;
    return kilomiter;
}

const miles = 100 ;
const kotoKilomiter = MilesToKilomiter(miles);
console.log( 'kilomiter', kotoKilomiter);