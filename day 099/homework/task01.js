const m = {
    name: "andria",
    age: 12,
    grade: "10",
    ra: true,
    
    idk: function() {
        return `name: ${this.name}, ასაკი: ${this.age}, grade: ${this.grade}, random: ${this.ra}`;
    }
};

m.grade = "10";

console.log(student.idk()); 