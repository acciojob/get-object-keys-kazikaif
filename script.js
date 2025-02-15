// Extend Object prototype with getKeys
Object.prototype.getKeys = function () {
    return Object.keys(this);
};

const student = {
    name: "John",
    age: 30,
    city: "New York"
};

// Test output
console.log(student.getKeys()); // ["name", "age", "city"]

// Do not change the code below
window.student = student;
