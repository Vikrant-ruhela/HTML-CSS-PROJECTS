let str = "abc";
let result;

function convertToNumber(str) {
  result = parseInt(str);
  try {
    if (isNaN(result)) {
      throw new Error();
    }
    return result;
  } catch (Error) {
    const string = "invalid number";
    return string;
  }
}

console.log(convertToNumber(str));
