function manipulateString(str, logString) {
  let newStr = "";
  newStr = str.toUpperCase();
  return logString(newStr);
}

function logString(newStr) {
  console.log(`The manipulated string is : ${newStr}`);
}

manipulateString("hello,world!", logString);
