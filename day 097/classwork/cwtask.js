// Car ობიექტის შექმნა
let car = {
    brnd: "Toyota",
    mdl: "Corolla",
    yrs: 2022,
    clr: "ლურჯი",
    wn: 1300,

    getInfo: function() {
        return `ამ მანქანის ბრენდია ${this.brnd}, კონკრეტული მოდელია ${this.mdl}, გამოშვების წელი ${this.yrs}, ფერი ${this.clr}, წონა ${this.wn} კგ.`;
    }
};

console.log(car.brnd);
console.log(car.mdl);
console.log(car.yrs);
console.log(car.clr);
console.log(car.wn);

car.brnd = "manqana";
car.mdl = "ds2qx";
car.yrs = 2231;
car.clr = "redi";
car.wn = 14200;

console.log(car.getInfo()); 

car.mode = "Sport";

console.log(car); 

delete car.mode;

console.log(car); 

if (car.brnd === "aramaqara") {
    console.log("იგივე");
} else {
    console.log("სხვა");
}
