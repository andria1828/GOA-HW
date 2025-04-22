// 1
const prsn = {
  name: "zura",
  age: 301,
  city: "tbilisi"
};

for (let key in prsn) {
  console.log(`${key}: ${prsn[key]}`);
}
// 2
const price = {
  apple: 2,
  banana: 1.5,
  cherry: 3
};

let total = 0;
for (let key in price) {
  total += price[key];
}

console.log("sum", total);
// 3
const mixdta = {
  name: "iojfoihecmi",
  age: 25,
  isStudent: true,
  salary: 50000
};
for (let key in mixdta) {
  if (typeof mixdta[key] === "number") {
    console.log(`${key}: ${mixdta[key]}`);
  }
}
// 4
const book = {
  "das dasd": "x",
  "ha": "fsdfsdf",
  "jfsdnjvnjs": "jtnyufg"
};

const booktit = [];
for (let key in book) {
  booktit.push(key);
}

console.log(booktit);
// 5
const num1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let num1 of num1) {
  sum1 += num1;
}

console.log("SADasdA:", sum);
// 6
const str = "gergergergsdfd";
for (let char of str) {
  console.log(char);
}
// 7
const strr = ["dasdasd", "gfe", "fsdf", "sdfsdf", "fdasfds", "gergeg"];

for (let str of strr) {
  if (str.length > 5) {
    console.log(str);
  }
}
// 8

const num = [1, 2, 3, 4, 5];
const sqr = [];

for (let num of num) {
  sqr.push(num * num);
}

console.log(sqr);