const products = (productName, productCategory, purchasedQuantity = 3) =>
  `You have purchased ${purchasedQuantity} ${productName}(s) in the ${productCategory} category. Thank you for shopping with us!`;

// const shoppingCart = products("Hat", "Men's Wear", 2);
// const shoppingCart = products("Skirt", "Women's Wear");
const shoppingCart = products("Skirt", "Women's Wear", 7);
console.log(shoppingCart);
