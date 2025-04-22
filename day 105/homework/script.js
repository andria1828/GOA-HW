// 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let nestedArray1 = [[7, 8], [9, 10]];

let arr5 = arr1.concat(arr2);
arr5.copyWithin(5, 0, 3);
arr5.fill(0, 6);
arr5.pop();
arr5.shift();
arr5.unshift(100, 200);
arr5.splice(2, 22, 'x', 'yd', 'zs');
let s = arr5.slice(-5);
let j = s.join(',');
let f = nestedArray1.flat();
let fssdf = f.includes(8);
let fd = f.indexOf(9);
let xx = f.lastIndexOf(7);

// 2
let nestedArray2 = [[7, 8], [9, 10]];
let arr7 = arr1.concat(arr2);
arr7.copyWithin(4, 0, 2);
arr7.fill(0, 2, 4);
arr7.pop();
arr7.shift();
arr7.unshift(10, 20);
arr7.splice(2, 2, 30, 40);
let asdad = arr7.slice(-3);
let sdadasd = asdad.join('-');
let sdfsfsfsdfsf = nestedArray2.flat();
let gfgjjhgd = sdfsfsfsdfsf.includes(9);
let arr1000 = sdfsfsfsdfsf.indexOf(10);
let arr1233 = sdfsfsfsdfsf.lastIndexOf(9);
sdfsfsfsdfsf.push(13);

// 3
let numbers = [10, 20, 30, 40, 50];
let ar2 = [60, 70, 80];
let newArray = numbers.concat(ar2);
numbers.copyWithin(3, 1, 3);
numbers.fill(100, 0, 3);
let lastElement = numbers.pop();
let firstElement = numbers.shift();
numbers.unshift(5, 15);
let joinedString3 = numbers.join('-');
let slicedArray3 = numbers.slice(1, 3);
numbers.splice(2, 2, 200, 300);
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArray3 = nestedArr.flat(2);
let hasFifty = numbers.includes(50);
let indexOfThirty = numbers.indexOf(30);
let lastIndexOfTwenty = numbers.lastIndexOf(20);
numbers.push(90, 100);

// 4
let people = [
  { id: 1, name: 'sfdsdfasf' },
  { id: 2, name: 'ewreqwrqwer' },
  { id: 3, name: 'bvncvnvn' },
];

let morePeople = [
  { id: 4, name: 'jhdgjdhgj' },
  { id: 5, name: 'DFfddEEW' },
];

let ap = people.concat(morePeople);
ap.copyWithin(-2, 0, 2);
ap.fill({ id: 0, name: 'Unknown' }, 0, 2);
let rp = ap.pop();
let frst = ap.shift();
ap.unshift({ id: 6, name: 'Frank' }, { id: 7, name: 'Grace' });
let pst = ap.map(p => p.name).join(',');
let somp = ap.slice(1, 3);
ap.splice(2, 2, { id: 10, name: 'Ivan' }, { id: 11, name: 'Judy' });
let nstarr = [[1, 2], [3, 4], [[5, 6], [7, 8]]];
let flat212 = nstarr.flat(2);
let sdfasdf = ap.some(person => person.id === 5 && person.name === 'Eve');
let sdfasdfasf = ap.findIndex(person => person.id === 3);
let dasdasd = ap.map(p => p.name).lastIndexOf('Bob');
flat212.push({ id: 8, name: 'Hank' });

