let arr = [1, 4, 6, 2, 8, 1, 4, 6];

function uniqueElements(arrOfNumbers) {
  let sett = new Set(arrOfNumbers);
  return sett;
}

console.log(uniqueElements(arr));
