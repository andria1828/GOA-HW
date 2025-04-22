const books = {
  t: "რაიმე სათაური აბა",
  a: "რავი აბა",
  p: 3520,
  py: 19285,
  randomthing: function() {
    return `წიგნის სათაური: ${this.t}, ავტორი: ${this.a}, გვერდების რაოდენობა: ${this.p}, გამოქვეყნების წელი: ${this.py}.`;
  }
};

console.log(books);

console.log(book.y);
console.log(book.a);
console.log(book.p);
console.log(book.py);

console.log(book["y"]);
console.log(book["a"]);
console.log(book["p"]);
console.log(book["py"]);

console.log(books.randomthing());
  