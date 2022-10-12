const items = Array.from(document.querySelectorAll("li"));
// console.log(items);

// const itemsList = items.map((item) => {
//   console.log(item);
// });

// console.log(Array.from(items));

// const itemsList = Array.from(items);

const toDoItems = items.map((item) => {
  // console.log(item);
  console.log(item.textContent);
});
