const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// loop using for
// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
        // console.log(studentReport[i])
//     }
// }

// loop using while
let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++
}

// loop using forEach
studentReport.forEach(function (student) {
    if (student < LIMIT) {
        console.log(student);
    }
});

// loop using for...in
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}