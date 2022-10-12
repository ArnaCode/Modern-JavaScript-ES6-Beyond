const person = {
  name: "John",
  age: 32,
};

// for (const trait of person) {
//   console.log(trait);
// }

// console.log(Object.entries(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));

// for (const trait of Object.entries(person)) {
//   console.log(trait);
// }

for (const [trait, value] of Object.entries(person)) {
  console.log(`${trait}: ${value}`);
}
