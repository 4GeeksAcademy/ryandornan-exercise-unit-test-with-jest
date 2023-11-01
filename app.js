const sum = (a,b) => {
    return a + b
}

console.log(sum(14,9));

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

console.log(fromDollarToYen(1)); 
console.log(fromEuroToDollar(1)); 
console.log(fromYenToPound(1)); 

