// 1
const name = "idk";
const age = 635;
const prsn = { name, age }; 
console.log(prsn);

// 2
const pname = "something";
const student = {
    name: "joni",
    [pname]: 915, 
};
console.log(student); 

// 3
const car = {
  brand: "jigula",
  start() {
    console.log("Car started jigulifly");
  },
};
car.start(); 

// 4
const x = 120;
const y = 5120;
const cordinat = { x, y }; 
console.log(cordinat); 

// 5
function cprsn(name, age, job) {
  return { name, age, job }; 
}
const newPerson = cprsn("nah",760, "sm");
console.log(newPerson); 

// საკლასო გავაკეთე