function x(y) {
    console.log("x called");
    y(); // function y called
}

function y() {
    console.log("y called");
}
x(y); // function x takes function y as an argument 


// second example of callback function  real use case

// let's pretend response is coming from server

const students =
    [
        { name: "Varun", language: "javascript" },
        { name: "Anurag", language: "python" }
    ];
function fetchRecords() {
    let str = "";
    setTimeout(() => {
        students.forEach(student => {
            str += `<li>${student.language}</li>`
        });
        document.getElementById("studentData").innerHTML = str;
        console.log(str)
    }, 2000);
}
fetchRecords();