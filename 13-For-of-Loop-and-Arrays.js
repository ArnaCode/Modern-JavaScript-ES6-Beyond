const vegetables = ["Potato", "Tomato", "Garlic", "Onion"];

// for (let i = 0; i < vegetables.length; i++) {
//   // console.log(i);
//   console.log(vegetables[i]);
// }

// for (const vegetable of vegetables) {
//   console.log(vegetable);
// }

// for (const vegetable in vegetables) {
//   console.log(vegetable);
// }

// console.log(vegetables.entries());

// for (let vegetable of vegetables.entries()) {
//   // console.log(vegetable);
//   console.log(vegetable[0]);
//   console.log(vegetable[1]);
// }

// for (let [i, vegetable] of vegetables.entries()) {
//   // console.log(i, vegetable);

//   console.log(`${i + 1}- ${vegetable}`);
// }

// ------------------------------------------------
function addition() {
  // console.log(arguments);
  // console.log(typeof arguments);

  let result = 0;

  // for (let i = 0; i < arguments.length; i++) {
  //   // console.log(arguments[i]);
  //   result += arguments[i];
  // }

  for (const number of arguments) {
    result += number;
  }

  console.log(result);
}

addition(10, 20, 30);
