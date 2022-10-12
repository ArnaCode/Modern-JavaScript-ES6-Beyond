const productCategory = "Fruits";
const products = ["Oranges", "Apples", "Grapes"];

// const shoppingCart = products.map((product, i) => {
//   return {
//     productName: product,
//     productCategory: productCategory,
//     item: i + 1,
//   };
// });

const shoppingCart = products.map((product, i) => ({
  productName: product,
  productCategory: productCategory,
  item: i + 1,
}));

console.table(shoppingCart);
