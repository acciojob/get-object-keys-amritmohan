//your JS code here. If required.
const student = {
  name: "John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student)); 

const student2 = {
  name: "Alice",
  age: 22,
  city: "New York"
};

console.log(getKeys(student2)); 

const emptyObj = {};
console.log(getKeys(emptyObj)); 
