// let fetchComments = (comments) => {
//   setTimeout(() => {
//     return { comments };
//   }, 3000);
// };

// const userComments = fetchComments("Nice Picture");
// console.log(userComments);

let fetchComments = (comments, callback) => {
  setTimeout(() => {
    callback({ comments });
  }, 3000);
};

fetchComments("Nice Picture", (user) => {
  console.log(user);
  // console.log(typeof user);
  console.log(user.comments);
});
