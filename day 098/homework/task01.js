function smvn(name, age, prfn) {
    this.name = name;
    this.age = age;
    this.prfn = prfn;
    this.int = function() {
        console.log(`my name is ${this.name}, ${this.age}-yrs-old ${this.prfn}`);
    };
}
const p2 = new smvn("beso", 310, "ექიმია აბა");
p2.int();
