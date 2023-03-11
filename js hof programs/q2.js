let timeout = 3000;

let setintervalid = setInterval(() => {
  let printTime = timeout;
  console.log("timmes left:" + timeout / 1000 + " second");
  timeout = timeout - 1000;
}, 1000);

setTimeout(() => {
  console.log("timmes left:" + 1 + " second");
  clearTimeout(setintervalid);
  let randomNum = Math.floor(Math.random() * 100);
  console.log("Random number :", randomNum);
}, timeout);
