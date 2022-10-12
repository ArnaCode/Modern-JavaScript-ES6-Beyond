function* employees() {
  yield "John";

  yield "Rose";

  yield "Sandra";
}

const employee = employees();
console.log(employee);

console.log(employee.next().value);
console.log(employee.next());
console.log(employee.next());
console.log(employee.next());
