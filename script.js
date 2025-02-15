// Create student object
const student = {
  name: "John",
  age: 30,
  city: "New York"
};

// Standalone function to get keys
function getKeys(obj) {
  return Object.keys(obj);
}

// Test output
console.log(getKeys(student)); // Output: ["name", "age", "city"]

// Do not change the code below
window.student = student;
window.getKeys = getKeys;
