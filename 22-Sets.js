const myFirstSet = new Set();
myFirstSet.add(5);
myFirstSet.add(25);
myFirstSet.add("Hey");
myFirstSet.add(5);

// console.log(myFirstSet);
// console.log(myFirstSet.size);

// console.log(myFirstSet.keys());
// console.log(myFirstSet.values());

// myFirstSet.forEach((entry) => console.log(entry));

// for (const item of myFirstSet) {
//   console.log(item);
// }

// myFirstSet.delete(25);
// myFirstSet.clear();

// console.log(myFirstSet);

// const fruits = new Set(["Strawberry", "Peach", "Grape"]);
// console.log(fruits);

const names = ["John", "Clint", "Joseph"];
const employeeName = new Set(names);
console.log(employeeName);
// console.log(employeeName[0]);
// console.log(employeeName[2]);

console.log(employeeName.has("John"));
