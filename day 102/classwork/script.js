const val = [
    25, 
    "Hello World", 
    3.14, 
    true, 
    { 
        name: "ნოდარა",
        surname: "ელიკაშვილი",
        age: 322,
        country: "ჩინა",
        city: "მოსკოვი"
    }
];

const obj1 = val[4]; 
const x = `name is ${obj1.name}, surname ${obj1.surname}, i am ${obj1.age} yrsold, i live in ${obj1.country}-, city ${obj1.city}-in`;

console.log(x);