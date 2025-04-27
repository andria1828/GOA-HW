// 1
const mltpl = (a, b) => a * b;

// 2
const user = { name: "zura", age: 5, country: "Georgia" };
const { name, age, country } = user;
// 3
const usr = {
    name,
    age,
    country,
    greet() {
        return `Hello, ${name}, and im from ${country}.`;
    },
};

// 4
const greetUser = (name = "name/g") => `Hello, ${name}!`;

// 5
console.log("details:");
for (let key in usr) {
    console.log(`${key}: ${usr[key]}`);
}

// 6
const f = ["2", "1", "3"];
console.log("Fruits:");
for (let i of f) {
    console.log(i);
}
