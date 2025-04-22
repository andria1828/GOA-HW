// 1

const person = { name: "jdfsjdf", age: 630, city: "mars" };
const { name, age } = person; 
console.log(name); 
console.log(age) 


// 2

const person2 = { name: "sf", age: 60, city: "fasdf gfdg" };
const { name: userName, city: userCity } = person; 
console.log(userName); 
console.log(userCity); 


// 3

const jstobj = {
  name: "asfdsdfsdf",
  age: 764,
  grades: {
    math: 10,
    science: 2,
    english: 1,
  },
};
const { grades: { math, english } } = jstobj; 
console.log(math); 
console.log(english); 


// 4

const nums = [1, 2, 3, 4, 5];
const [first, , third] = nums; 
console.log(first); 
console.log(third); 

