// let color1=prompt("Enter first color :");
// let color2=prompt("Enter second color :");
let color1="black"
let color2="yellow"
let mixedColor;

switch (true) {
    case color1==="red" && color2==="blue" || color2==="red" && color1==="blue" :
          mixedColor="purple";
        break;
    case color1==="red" && color2==="yellow" || color2==="red" && color1==="yellow" :
          mixedColor="orange";
        break;
    case color1==="blue" && color2==="yellow" || color2==="blue" && color1==="yellow" :
          mixedColor="green";
        break;

    default:
        mixedColor="invalid color combination"
        break;
}

console.log(mixedColor);