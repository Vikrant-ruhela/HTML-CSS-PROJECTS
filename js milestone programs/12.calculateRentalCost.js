let economy=4000;
let midSize=10000;
let luxury=20000;
let totalCost=0;

function totalCostOfRent(cartype,noOfDays) {
    totalCost=cartype*noOfDays;
    return totalCost;
}

console.log(totalCostOfRent(luxury,5));