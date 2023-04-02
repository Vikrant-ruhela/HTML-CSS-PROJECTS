function filterByCategory(products) {
  return function (category) {
    return products.filter(function (product) {
      return product.category === category;
    });
  };
}

let products = [
  { name: "shirt", category: "Clothing" },
  { name: "pants", category: "Clothing" },
  { name: "hat", category: "Accessories" },
  { name: "sunglasses", category: "Accessories" },
];

let clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
