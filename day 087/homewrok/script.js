// 1
let n = 0;
for(let i = 1; i <= 10; i++) {
    n += i;
}
console.log('შედეგი', n);

// 2

for (let i =1; i <= 10; i++) {
    console.log('ეს არის კვადრატი', i * i);
}

// 3

let m = 'andira'
for (let i = 0; i < m.length; i++){
    console.log(m[i]);
    
}

// 4

for (let i = 1; i < 21; i++) {  
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}