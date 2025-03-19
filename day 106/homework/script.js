function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let year = Number(prompt("Enter a year: "));
if (isLeapYear(year)) {
    console.log(`${year} is a Leap Year!`);
} else {
    console.log(`${year} is NOT a Leap Year!`);
}

const names = prompt("Enter names separated by commas: ").split(",");
const payer = names[Math.floor(Math.random() * names.length)];
console.log(`${payer.trim()} is paying for everyone's meal!`);

let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
let fizzbuzz = [];

numbers = numbers.filter((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push("FizzBuzz");
        return false;
    } else if (num % 3 === 0) {
        fizzbuzz.push("Fizz");
        return false;
    } else if (num % 5 === 0) {
        fizzbuzz.push("Buzz");
        return false;
    }
    return true;
});