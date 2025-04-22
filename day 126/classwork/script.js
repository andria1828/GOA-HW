const oldobj = {
  name: "nika",
  age: 312310,
  getDetails: function () {
    return "Name: " + this.name + ", Age: " + this.age;
  }
};

const impobj = {
  name: "zuka",
  age: 54351230,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  gender: "man",
  greet() {
    return `Hello, my name is the ${this.name}`;
  }
};
