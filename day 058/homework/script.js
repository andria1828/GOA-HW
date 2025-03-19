let car = {
    brand: 'Porsche',
    model: '911',
    year: 2021
};

console.log(car.brand); 
console.log(car.year); 

car.color = 'Red';

car.year = 2022;

delete car.model;

car.startEngineMessage = 'Engine started';

car.owner = {
    name: 'car owner',
    age: 20
};

console.log(car.startEngineMessage); 

console.log(car);
