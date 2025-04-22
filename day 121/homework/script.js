// ამოცანა 1
const sum = (a, b = 0) => a + b;

// ამოცანა 2

const func2 = ({ fn, ln = "Doe" }) => `${fn} ${ln}`;

// ამოცანა 3
const func3 = (araay = [1, 2, 3]) => araay.reduce((acc, num) => acc + num, 0);

// ამოცანა 4

const func4 = (s1, s2 = "") => s1 + s2;

// 5 ამოცანა

const func5 = (func = () => 10) => func();
