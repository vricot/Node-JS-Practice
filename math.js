const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;

//or add module.exports at the beginning of each function ex: module.exports.add = (x, y) => x + y
//can also shorten to just exports (ex: exports.square = square;) but be careful not to reassign the variable exports
//module.exports can be set to anything you want