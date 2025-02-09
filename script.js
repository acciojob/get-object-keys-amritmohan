
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

if (typeof module !== "undefined") {
  module.exports = getKeys;
}
