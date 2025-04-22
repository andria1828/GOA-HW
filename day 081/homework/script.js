// 1
let txt = prompt("please enter text");
let stxt = txt.slice(0, 140); 
console.log(stxt);
// 2
let name = prompt("please enter your name: ")
let sln = name.slice(0,1)
let lname = sln.toUpperCase()
let m = name.slice(2)
let ma = m.toLowerCase()
let sum = lname + ma
console.log('Hello',sum);
// 3
let name1 = prompt('please enter your name').length;
let name2 = prompt('please enter seccond name').length;
console.log(name1 > name2);
console.log(name1 < name2);
// 4
let n1 = Number(prompt("enter first number:"))
let n2 = Number(prompt("enter seccond number:"))

console.log(n1 + n2);
console.log(n2 + n1);
console.log(n1 + n2 + n1);

console.log(n1 - n2);
console.log(n2 - n1);
console.log(n1 - n2 - n1);

console.log();
console.log();
console.log();

console.log();
console.log();
console.log();
