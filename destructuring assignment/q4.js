function firstSecondLast(arr) {
  let [first, second, last] = [arr[0], arr[1], arr[arr.length - 1]];
  let finalarr = [first, second, last];
  return finalarr;
}

let output = firstSecondLast([1, 2, 4, 6, 8, 7, 9]);

console.log(output);
