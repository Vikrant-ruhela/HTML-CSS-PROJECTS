let cart = [
  { unitPrice: "10", quantity: "10" },
  { unitPrice: "20", quantity: "10" },
];

let finalOrderPrice = (cart) => {
  let totalPrice = cart.unitPrice * cart.quantity;
  return totalPrice;
};

console.log(finalOrderPrice(cart[0]));
console.log(finalOrderPrice(cart[1]));
