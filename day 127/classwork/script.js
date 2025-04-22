// 1

const nmbrarr = [10, 20, 30, 40];
const strarr = ["apple", "banana", "cherry", "mangoo"];
const bollarr = [true, false, true, false];

console.log("Numbers", ...nmbrarr);
console.log("Strings", ...strarr);
console.log("Booleans", ...bollarr);


// 2
const prsninfo = {
  name: "andria",
  age: 14,
  occupation: "empty",
  hobby: "sndasdkashd"
};

const carinf = {
  brand: "car1",
  model: "modelontop",
  year: 3201220,
  color: "White and blue"
};

const { name, age, occupation, hobby } = prsninfo;
const { brand, model, year, color } = carinf;

console.log("Personal Info:", name, age, occupation, hobby);
console.log("Car Info:", brand, model, year, color);
