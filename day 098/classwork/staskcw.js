function User(name, lstn, phnmuber, gmail, pswrd, cnfpasswrd) {
    this.name = name;
    this.lstn = lstn;
    this.phnmuber = phnmuber;
    this.gmail = gmail;
    this.pswrd = pswrd;
    this.cnfpasswrd = cnfpasswrd;

    this.cnste = function() {
        return `ma name is ${this.name}, ma usrname ${this.lstn}, phon num ${this.phnmuber}, gmail is${this.gmail}.`;
    };
}

const user1 = new User("obama", "a", "213472934678324", "luka ibama@gmail.com", "pswrd1", "pswrd1");
const user2 = new User("nodiko", "bejanidze", "595q294892", "bejanamxeci@gmail.com", "ndoara", "mani");
const user3 = new User("zura", "zzaza", "555555555", "zuurania@gmail.com", "ndoara", "zzzzzzz");

console.log(user1.cnste());
console.log(user2.cnste());
console.log(user3.cnste());
