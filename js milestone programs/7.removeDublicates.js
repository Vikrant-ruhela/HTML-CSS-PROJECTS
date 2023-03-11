let cart = [1, 3, 11, 7, 7, 5, 88, 5, 3];

function removeDublicates() {
  let newCart = [cart[0]];
  for (let j = 0; j < cart.length; j++) {
    let element = cart[j];

    for (let i = j + 1; i < cart.length; i++) {
      if (element === cart[i]) {
        continue;
      } else {
        if (newCart.includes(cart[i])) {
          continue;
        } else {
          newCart.push(cart[i]);
        }
      }
    }
  }
  return newCart;
}
console.log(removeDublicates());
