function x(y) {
    console.log("x called");
    y(); // function y called
}

function y() {
    console.log("y called");
}
x(y); // function x takes function y as an argument 