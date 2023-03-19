function swap(x, y, ...rest) {
  let arr = [x, y];
  [arr[0], arr[1]] = [arr[1], arr[0]];
  return arr;
}

console.log(swap(3, 5));
