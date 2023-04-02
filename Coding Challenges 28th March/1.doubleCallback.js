function Double(arr, exec) {
  return exec(arr);
}

function exec(arr) {
  let finalarr = [];
  for (let i = 0; i < arr.length; i++) {
    finalarr.push(arr[i] * 2);
  }
  return finalarr;
}

console.log(Double([1, 2, 3, 4, 5], exec));
