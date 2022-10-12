const onlineCourse = {
  name: "JavaScript Developer Bootcamp",
  price: 10,
  rating: 4.6,
  students: 2310,

  // updateStudents: () => {
  //   // console.log(this);
  //   this.students++;
  // },

  updateStudents() {
    console.log(this);
    this.students++;
  },
};

onlineCourse.updateStudents();

console.log(onlineCourse.students);
