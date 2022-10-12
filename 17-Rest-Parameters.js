function addition(...nums) {
  let number = 0;
  nums.map((num) => (number += num));
  return number;
}

let result = addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 120);
console.log(result);
