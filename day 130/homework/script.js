// 1
const getFullName = (fn, ln) => fn + " " + ln;



// 2
const s1 = num => num * num;





// 3
const n = [1, 2, 3, 4, 5];
const [first, , , , last] = n;

console.log(first); 
console.log(last);  
console.log(last);
console.log(last);

// 4
const student = { name: 'ndoo', age: 3 };
const { name: kidname, age: kiddoage } = student;



// 5
const o1 = {
    id: 1123420143,
    details: {
        name: "galaxy a60",
        price: 200
    }
};

const { details: { name: nameforitem, price: pricee } } = o1;




