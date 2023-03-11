// let num1= parseInt(prompt("Enter first number"))
// let operator=prompt("Enter operator")
// let num2= parseInt(prompt("Enter second number"))
let num1=12;
let num2=3;
let operator="-";
let result;

switch (operator) {
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '*':
        result=num1*num2;
        break;
    case '/':
        result=num1/num2;
        break;

    default:
        result="invalid operator"
        break;
}

console.log(result);