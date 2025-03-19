function Books(t, a, yrs) {
    this.t = t;
    this.a = a;
    this.yrs = yrs;

    this.smth = function() {
        return `${this.t} ვის მიერაც არის იდკ ${this.a}, გამოვაქვეყნე წლს${this.yrs}`;
    };
}

const book1 = new Books("b1", "adolf hitler", 193260);
const book2 = new Books("b2", "random", 19429);
const book3 = new Books("b3", "homelessguy", 18513232);

console.log(book1.smth());
console.log(book2.smth());
console.log(book3.smth());
