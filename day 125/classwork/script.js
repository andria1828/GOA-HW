// 1
const frststr = mixdata.find(item => typeof item === "string");
console.log("First String:", frststr);

// 2
const fruits = ["fruit1", "fruit2"];
const fruitchek = Array.isArray(fruits);
console.log("Is Fruits in Array:", fruitchek);

// 3
const strlen = Array.from(
  mixdata.filter(item => typeof item === "string"),
  str => str.length
);
console.log("String Lengths:", strlen);

// 4
const revdata = [...mixdata].reverse();
console.log("Reversed Data:", revdata);

// 5
const sortednum = mixdata
  .filter(item => typeof item === "number")
  .sort((a, b) => a - b);
console.log("Sorted Numbers:", sortednum);