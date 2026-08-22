// Solving 29 Question

const students = [
  { name: "Ali", marks: 85 },
  { name: "Danish", marks: 92 },
  { name: "Ahmed", marks: 67 },
  { name: "Hamza", marks: 45 },
];
// 1st
let highestMarks = Math.max(...students.map((student) => student.marks));
const studentWithHighestMarks = students.find(
  (student) => student.marks === highestMarks,
);
console.log(studentWithHighestMarks);

// 2nd
const passedStudents = students.filter((student) => student.marks > 50);
console.log(passedStudents);

// 3rd
const namesArray = students.map((student) => student.name);
console.log(namesArray);

// 4th
const averageMarks =
  students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(averageMarks);
