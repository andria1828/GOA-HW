// 2
let num = Number(prompt("please enter your number"));
let num2 = Number(prompt("please enter your number"));

console.log(num > num2, "პირველი მეტია მეორეზე");
console.log(num < num2, "პირველი რიცხვი მეორეზე ნაკლებია");

// 3
let name = prompt('enter your name') ;
console.log(name.tolowercase());
console.log(name.touppercase());

// 4
let currentYear = 2024;
let age = Number(prompt('enter your birthyear'));
console.log('შენ ხარ +',currentYear - age,'წლის');

// 5
let n1 = Number(prompt("please enter number"));
let n2 = Number(prompt("please enter number"));
let n3 = Number(prompt("please enter number"));

let jami = n1 + n2 + n3;
let avrg = jami / 3;

console.log(jami,'ეს არის ჯამი');
console.log(avrg, 'ეს არის საშვალო');

alert(jami,'ეს არის ჯამი');
alert(avrg, 'ეს არის საშვალო');