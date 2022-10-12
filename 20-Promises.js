// const posts = fetch("https://jsonplaceholder.typicode.com/posts");

// posts
//   .then((data) => data.json())
//   .then((actualData) => {
//     // console.log(actualData);

//     for (post of actualData) {
//       // console.log(post);
//       // console.log(post.userId);
//       // console.log(post.id);
//       console.log(post.title);
//     }
//   });

const todos = fetch("https://jsonplaceholder.typicode.com/todos");

todos
  .then((data) => data.json())
  .then((todos) => {
    // console.log(todos);

    todos.forEach((todo) => {
      console.log(`${todo.id}- ${todo.completed}`);
    });
  });
