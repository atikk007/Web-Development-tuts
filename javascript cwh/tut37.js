let students = [
    { studentName: "Atik", age: 18 },
    { studentName: "Rohan", age: 50 }
];

function enrollStudents(newStudent, callback) {
    setTimeout(() => {
        students.push(newStudent);
        console.log("Student has been enrolled");
        callback();
    }, 1000);

}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (element) {
            str += `<li> ${element.studentName}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { studentName: "Sunny", age: 60 };


enrollStudents(newStudent, getStudents);

