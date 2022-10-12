const courseDetails = {
  name: "CSS Layouts Masterclass",
  author: "Muslim Helalee",
  duration: 50,
  badge: "Highest Rated",
};

const courseFeatures = [
  "Learn how to create responsive websites",
  "Learn how to create adaptive website",
  "Learn Flexbox and Grid with exercises and whiteboarding sessions",
  "How to design a mobile first layout",
  "Creating a modern sass workflow",
];

const onlineCourse = `
<section>
  <h1>${courseDetails.name}</h1>
  <ul>
    <li>Author: ${courseDetails.author}</li>
    <li>Duration: ${courseDetails.duration}</li>
    <li>${courseDetails.badge}</li>
  </ul>
</section>

<section>
  <h2>Course Details</h2>

  <ul>
    ${courseFeatures.map((feature) => `<li>${feature}</li>`).join("")}
  </ul>
</section


`;

document.body.innerHTML = onlineCourse;
