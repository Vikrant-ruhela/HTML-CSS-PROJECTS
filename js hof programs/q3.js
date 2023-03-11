let listOfItem = {
  item1: 100,
  item2: 200,
  itme3: 300,
};

let keys = Object.keys(listOfItem);
let values = Object.values(listOfItem);

let costInInr = values.map((element) => {
  return element * 80;
});

let obj = {};

keys.map(function (e, index) {
  obj[e] = costInInr[index];
});

console.log(obj);
