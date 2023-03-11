setTimeout(() => {
  let input = "pw skills";
  let reversedArr = [];

  for (let i = 0; i < input.length; i++) {
    reversedArr.push(input[i]);
  }

  reversedArr.reverse();
  let reversedStr = "";
  for (let j = 0; j < reversedArr.length; j++) {
    reversedStr = reversedStr + reversedArr[j];
  }

  console.log(reversedStr);
}, 2000);
