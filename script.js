let student = {
  name: 'atik', // Corrected the syntax for the value
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

let keys = student.getKeys();

console.log(keys);
