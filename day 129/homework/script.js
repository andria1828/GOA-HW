// 1
function funcc(n1, ...n2) {
    const fn  = n2.filter(num => num > n1); 
    return  fn.reduce((sum, num) => sum + num, 0); 
}


// 2
const d1 = {
    id: 1101,
    name: "da",
    price: 10,
    brand: "das",
    color: "gsadaf",
    weight: "2kg"
};

const { id, name, ...d } = d1;

console.log(id); 
console.log(name); 
console.log(d); 



// 3
function func(s, ...a) {
    const ca = [s, ...a.flat()]; 
    return ca;
}

// 4
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mo = { ...obj1, ...obj2 };

console.log(mo); 


// 5
const n2 = [103123, 2210, 321330];

const mn = [...n2,312312340, 312350];

console.log(n2); 
console.log(mn); 


// 6
function func1(a, b, c) {
    return Math.max(a, b, c);
}

const values = [25, 10, 35, 5];

console.log(func1(...values.slice(0, 3))); 

