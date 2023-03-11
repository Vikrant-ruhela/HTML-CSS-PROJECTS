let cart = [10, 20, 30, 40, 50];
let newCart = [];

function correctBug() {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    newCart.push(element * 2);
  }
  return newCart;
}

console.log(correctBug());
