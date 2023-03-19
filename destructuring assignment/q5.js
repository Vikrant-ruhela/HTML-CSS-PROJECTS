function minMax(arr) {
  let Min = Math.min(...arr);
  let Max = Math.max(...arr);
  return {
    max: Max,
    min: Min,
  };
}

let output = minMax([5, 2, 7, 1, 9]);

console.log(output);
