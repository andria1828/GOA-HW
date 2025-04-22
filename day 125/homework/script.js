// 1

const users = [
  { id: 1, name: "jemali" },
  { id: 2, name: "tyemali" },
  { id: 3, name: "emali" }
];
const userrs = users.find(user => user.id === 3);
console.log(userrs);

// 2

const colors = ["red", "blue", "orange"];
colors.reverse();
console.log(colors); 

// 3

const prstore = [19.929, 5.21399, 123123.99, 12399.99];
prstore.sort((a, b) => b - a);
console.log(prstore);


// 4

const str1 = "JavaScript";
const chrctr = Array.from(str1);
console.log(chrctr); 


// 5

const data1 = [1, 2, 3, 4];
const data2 = "hello hi wsp, world!";
const dataar1 = Array.isArray(data1);
const dataarr2 = Array.isArray(data2);
console.log(dataar1); 
console.log(dataarr2); 


const courses = [
  { id: "sdasd", name: "fds", students: [{ name: "jemalia", grades: [82135, 931232] }, { name: "sdfsdfsdf", grades: [8, 88] }], isActive: true, capacity: 50, credits: 3 },
  { id: "21312vdsf", name: "w", students: [{ name: "arsena", grades: [2170, 12315] }, { name: "sgfgad", grades: [65, 80] }], isActive: false, capacity: 25, credits: 4 }
];
const stdntwhstr = "Alice,Bob,Charlie,Dave";

// 1
console.log(Array.isArray(courses)); 
console.log(Array.isArray(stdntwhstr));

// 2
const allstndname = Array.from(stdntwhstr.split(","));
console.log(allstndname);

// 3
courses.forEach(course => {
  console.log(`Course ID: ${course.id}, Name: ${course.name}`);
});

// 4
const crsname = courses.map(course => course.name);
console.log(crsname);

// 5
const curseavrg = courses.map(course => ({
  id: course.id,
  averageGrade: course.students.reduce((sum, student) => sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length, 0) / course.students.length
}));
console.log(curseavrg);

// 6
const actvcurs = courses.filter(course => course.isActive);
console.log(actvcurs);

// 7
const calccurse = courses.find(course => course.id === "MA201");
console.log(calccurse);

// 8
courses.forEach(course => {
  const allabovw70 = course.students.every(student => student.grades.some(grade => grade >= 70));
  console.log(`${course.name} - students have grades >= 70: ${allabovw70}`);
});

// 9
const lowcourse = courses.some(course => course.capacity < 30);
console.log(lowcourse);

// 10
const cousreb = [...courses].sort((a, b) => a.capacity - b.capacity);
console.log(cousreb);

// 11
cousreb.reverse();
console.log(cousreb);

// 12
const credit = actvcurs.reduce((sum, course) => sum + course.credits, 0);
console.log(credit);

// 13
const revvr = actvcurs.reduceRight((names, course) => names + (names ? " - " : "") + course.name, "");
console.log(revvr);