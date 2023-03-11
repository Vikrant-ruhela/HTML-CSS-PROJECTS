let originalPrice=25000;
let discountedPrice=250;
let saved=0;

let percentageOfDiscount = ()=> {
    saved=discountedPrice/originalPrice*100;
    return (100-saved);
}

console.log("you saved "+percentageOfDiscount()+"%");