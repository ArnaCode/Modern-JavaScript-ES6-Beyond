const employees = new Map();

employees.set("Name", "John");
employees.set("Age", 35);
employees.set("Job Title", "Principal Designer");

// console.log(employees);
// console.log(employees.size);

// employees.delete("Age");

// console.log(employees.entries());
// console.log(employees.keys());
// console.log(employees.values());

// console.log(employees.has("Department"));
// console.log(employees.has("Job Title"));

// console.log(employees.get("Job Title"));

// employees.forEach((employee) => console.log(employee));

// employees.forEach((employee, data) => console.log(data, employee));

// for (const employee of employees) {
//   console.log(employee);
// }

for (const [key, value] of employees) {
  console.log(`${key}: ${value}`);
}
