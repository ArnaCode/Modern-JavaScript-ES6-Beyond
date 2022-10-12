// const oddNumbers = [1, 3, 5];
// const evenNumbers = [2, 4, 6];

// const numbers = [...oddNumbers, ...evenNumbers];
// const numbers = [...oddNumbers, 10, 20, 30, ...evenNumbers];
// console.log(numbers);

// const newNumbers = oddNumbers;
// newNumbers[2] = 20;
// console.log(newNumbers);
// console.log(oddNumbers);

// const newNumbers = [...oddNumbers];
// newNumbers[2] = 20;
// console.log(newNumbers);
// console.log(oddNumbers);

// -------------------------------------------------

const mike = {
  school: "Chicago Public School",
  grade: 5,
  subjects: ["Mathematics", "History", "Geography", "Physics"],
};

// const schoolSubjects = ["Chemistry", "Astronomy", mike.subjects];
const schoolSubjects = ["Chemistry", "Astronomy", ...mike.subjects];
// console.log(schoolSubjects);

// -------------------------------------------------
const numbers = [1, 3, 5, 45, 98, 784, 135, 4510];
const evenNumbers = [2, 4, 6, 8, 10];

// numbers.push(evenNumbers);
numbers.push(...evenNumbers);

console.log(numbers);
