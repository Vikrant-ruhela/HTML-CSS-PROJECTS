console.log(myLetVar); // undefined
console.log(myVarVar); // undefined
console.log(myConstVar); // ReferenceError: myConstVar is not defined

{
  console.log(myLetVar);
  console.log(myVarVar);
  console.log(myConstVar);
  let myLetVar = "I am a let variable";
  var myVarVar = "I am a var variable";
  const myConstVar = "I am a const variable";
  console.log(myLetVar);
  console.log(myVarVar);
  console.log(myConstVar);
}
console.log(myLetVar); // ReferenceError: myLetVar is not defined
console.log(myVarVar); // 'I am a var variable'
console.log(myConstVar); // ReferenceError: myConstVar is not defined
