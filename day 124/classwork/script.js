
const prdct = [
    { name: "Laptop", price: 12200 },
    { name: "headset", price: 215 },
    { name: "Keyboard", price: 454 },
    { name: "pad", price: 7001 }
  ];
  
  
  // 1
  const name = prdct.map(product => product.name);
  console.log("Product Names:", name);
  

  // 2
  const affordable = prdct.filter(product => product.price < 100);
  console.log("Affordable Products:", affordable);
  

  // 3
  const totalp = prdct.reduce((sum, product) => sum + product.price, 0);
  console.log("Price of Products:", totalp);
  
  
  // 4
  const revname = prdct
    .map(product => product.name)
    .reduceRight((names, name) => `${names} - ${name}`);
  console.log("Product Reversed:", revname);