const product = {
  productName: "Stylish Sunglasses",
  productPrice: 12.99,
  productStock: 20,

  shipping: {
    premiumUser: "free",

    regularUser: {
      regularMonthly: 5,
      regularYearly: 2,
    },
  },

  discount: 0.25,
};

// const productName = product.productName;
// const productPrice = product.productPrice;

const { productName, productPrice } = product;

const { regularMonthly, regularYearly } = product.shipping.regularUser;

const { regularMonthly: monthly, regularYearly: annual } =
  product.shipping.regularUser;

const { discount = 0.3, holidaySpecial = true } = product;

// function estimateDiscount() {
//   holidaySpecial === true
//     ? (product.discount = 0.3)
//     : (product.discount = 0.25);
// }

// estimateDiscount();

// if (holidaySpecial) {
//   product.discount = 0.3;
// } else {
//   product.discount = 0.25;
// }

if (holidaySpecial) product.discount = 0.3;

// console.log(productName);
// console.log(productPrice);

// console.log(`Regular Monthly User: ${regularMonthly}`);
// console.log(`Regular Yearly User: ${regularYearly}`);

// console.log(`User Monthly: ${monthly}`);
// console.log(`User Annual: ${annual}`);

console.log(product);

// console.log(discount);
// console.log(holidaySpecial);
