// 1
const emailformatt = users.map(user => `<${user.email}>`);

// 2
const evenum = numbers.filter(num => num % 2 === 0);
const square = evenum.map(num => num ** 2);

// 3
const main = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// 4
const rev = words.reduceRight((sentence, word) => `${sentence} ${word}`, "").trim() + ".";

// 5
stdntdata.forEach(student => console.log(`Hello, ${student.name}!`));
const names = stdntdata.map(student => student.name);
const stdntavrg = stdntdata.map(student => {
  const totalg = Object.values(student.grades).flat();
  const avrgGrade = totalg.reduce((sum, grade) => sum + grade, 0) / totalg.length;
  return { name: student.name, avrg: avrgGrade };
});
const hightstudent = stdntavrg.filter(student => student.avrg >= 85).map(student => student.name);
const strugle = stdntdata.filter(student =>
  Object.values(student.grades).some(sbjgScores => sbjgScores.every(score => score < 70))
);
const extra = stdntdata.reduce((sum, student) => sum + student.extal.length, 0);
const sbjgAverages = stdntdata.reduce((sbjgAcc, student) => {
  Object.entries(student.grades).forEach(([sbjg, grades]) => {
    if (!sbjgAcc[sbjg]) sbjgAcc[sbjg] = [];
    sbjgAcc[sbjg].push(...grades);
  });
  return sbjgAcc;
}, {});

const higest = Object.entries(sbjgAverages).reduce((maxSubject, [sbjg, grades]) => {
  const avg = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  return avg > maxSubject.avrg ? { sbjg, avrg: avg } : maxSubject;
}, { sbjg: "", avrg: 0 }).sbjg;
const team = stdntdata
  .filter(student => student.extal.includes("Debate Team"))
  .map(student => student.name)
  .reduceRight((names, name) => `${names} and ${name}`);
const goodatance = stdntdata.every(student => {
  const att = student.att.filter(day => day).length / student.att.length;
  return att >= 0.5;
});

const inactive = stdntdata.some(student => student.extal.length === 0);
stdntdata.forEach(student => {
  Object.entries(student.grades).forEach(([sbjg, grades]) => {
    if (grades.includes(100)) {
      console.log(`Congratulations, ${student.name}, achieving a perfect score ${sbjg}!`);
    }
  });
  
});