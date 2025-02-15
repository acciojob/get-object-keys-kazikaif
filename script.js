const student = {
  name: "John",
  age: 30,
  city: "New York",
  getKeys: function () {
    return Object.keys(this);
  }
};

// Test output
console.log(student.getKeys()); 

// Do not change the code below
window.student = student;
