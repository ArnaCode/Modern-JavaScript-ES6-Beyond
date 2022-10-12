async function getusers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await users.json();

  const employeesList = document.createElement("ul");

  for (const user of response) {
    // console.log(
    //   `${user.name} is currently working at "${user.company.name}" Company and their email address is "${user.email}".`
    // );

    const employees = `<li>Name: ${user.name}</li>`;

    employeesList.innerHTML += employees;
  }

  document.body.appendChild(employeesList);
}

getusers();
