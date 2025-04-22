console.log('Enter number for any type of coffee');
console.log('1 - Americano, 2 - Espresso, 3 - Cappuccino');

let coffe = Number(prompt('Enter your favorite coffee (1, 2, or 3):'));

switch (coffe) {
    case 1:
        console.log("Americano");
        break;
    case 2:
        console.log("Espresso");
        break;
    case 3:
        console.log("Cappuccino");
        break;
    default:
        console.log("I don't know this type of coffee");
}
