const data = ["Hammer", false, "Cosmos", 13];

const [object, boolean, buzz, number] = data;

// console.log(object);
// console.log(boolean);
// console.log(buzz);
// console.log(number);

// Swapping Variables

let mathGrade = 18.5;
let historyGrade = 19.5;

console.log("Math:", mathGrade);
console.log(`History: ${historyGrade}`);

[mathGrade, historyGrade] = [historyGrade, mathGrade];

console.log("Math:", mathGrade);
console.log(`History: ${historyGrade}`);
