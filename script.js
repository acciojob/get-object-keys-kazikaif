//your JS code here. If required.
 
const student = {
  name: "John",
};

 function getKeys(obj) {
  return Object.keys(obj);
}

 console.log(getKeys(student)); // Output: ["name"]

 window.student = student;
window.getKeys = getKeys;
