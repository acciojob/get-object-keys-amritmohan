// Extend Object prototype to include getKeys method
Object.prototype.getKeys = function () {
    return Object.keys(this);
};

// Do not change the code below this line
window.student = { name: "John Doe" };
