const employeeData = [
  {
    name: "John Scott",
    positionStatus: "Junior",
  },

  {
    name: "Mark Johnson",
    positionStatus: "Mid",
  },

  {
    name: "Julie Anderson",
    positionStatus: "Junior",
  },

  {
    name: "Muslim Helalee",
    positionStatus: "Senior",
  },

  {
    name: "Jack Sparrow",
    positionStatus: "Junior",
  },

  {
    name: "Sandra Jeffrey",
    positionStatus: "Mid",
  },

  {
    name: "Scott Jeffrey",
    positionStatus: "Junior",
  },
];

const employeeBonusList = `
<section>
  <h1>Bonus List</h1>
  <ul>
    ${employeeData
      .map((employee) =>
        employee.positionStatus === "Junior" ? `<li>${employee.name}</li>` : ""
      )
      .join("")}
  </ul>
</section>
`;

// console.log(employeeBonusList);

document.body.innerHTML = employeeBonusList;
