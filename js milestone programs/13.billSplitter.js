let costOfDishes = [110, 80, 400, 660, 350];
let numOfPersons = 5;

function res(costOfDishes, numOfPersons) {
  let totalCost = 0;
  for (let i = 0; i < costOfDishes.length; i++) {
    totalCost = totalCost + costOfDishes[i];
  }
  let bill = totalCost / numOfPersons;

  let ojb = { totalBill: `${totalCost}`, bill: `${bill}` };
  return ojb;
}

console.log(res(costOfDishes, numOfPersons));
