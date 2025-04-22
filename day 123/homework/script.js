// 1
const n = [2, 4, 6, 8];
const allevn = n.every(num => num % 2 === 0);
console.log("All n are even:", allevn);

// 2
const strr = ["dsa", "gfgd", "ewff"];
const lngstr = strr.some(str => str.length > 5);
console.log("Array contains a long string:", lngstr);

// 3
const ognlnm = [1, 2, 3, 4]; 
const dblnm = [];
ognlnm.forEach(num => dblnm.push(num * 2));
console.log("Doubled n:", dblnm);

// 4
const users = [
  { name: "nika", age: 230 },
  { name: "nodo", age: 118 },
  { name: "rgdfgd", age: 225 }
]; 


// 5
const product = [
  { name: "Product 1", price: 25 },
  { name: "Product 2", price: 15 },
  { name: "Product 3", price: 30 }
]; 


// 6
const cstmrordr = [
  {
    orderId: 101,
    cutomerid: 1,
    i: [
      { title: "Book 1", price: 15, quantity: 1 },
      { title: "Book 2", price: 20, quantity: 2 }
    ],
    Addresstoship: "noadress",
    diliver: true
  },
  {
    orderId: 102,
    cutomerid: 2,
    i: [
      { title: "Book 4", price: 12, quantity: 1 }
    ],
    Addresstoship: "fsfsdfsdft",
    diliver: false
  }
];

// 1,2,3,4,5,6

const alordtim = cstmrordr.every(order => order.i.length > 0);
console.log("orders have i:", alordtim);

const delvry = cstmrordr.some(order => !order.diliver);
console.log("Has pending:", delvry);

cstmrordr.forEach(order => {
  console.log(`Order ID: ${order.orderId}`);

  order.i.forEach(item => {
    console.log(` - ${item.title} (Quantity: ${item.quantity})`);
  });

  const allexpbook = order.i.every(item => item.price > 10);
  console.log(`Ordr${order.orderId} contains expensive books: ${allexpbook}`);

  const copies = order.i.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has book: ${copies}`);
});