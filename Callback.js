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

//created fetchRecords function which fetches the recodrs in 2 seconds and display the records
function fetchRecords() {
    let str = "";
    setTimeout(() => {
        students.forEach(student => {
            str += `<li>${student.language}</li>`
        });
        document.getElementById("studentData").innerHTML = str;

    }, 2000);
}
// fetchRecords();

// now we want to insert values of one more student into this data that will take 5 seconds to insert data

function insertData(newStudentData, fetchRecords) {
    setTimeout(() => {
        // inserting new studnet record to to dataBase
        students.push(newStudentData);
        fetchRecords(); // callback function called inside the insertData function
    }, 5000);

}
let newStudentData = { name: "Haadi", language: "PHP" }; // new studnet record

insertData(newStudentData, fetchRecords); // passed fetch record function as an argument of insertData which is callback function