function prfl(usr, gmail, pswrd) {
    this.usr = usr;
    this.gmail = gmail;
    this.pswrd = pswrd;

    this.parolshecvla = function(newPassword) {
        this.pswrd = newPassword;
    };

    this.dtls = function() {
        return `usr: ${this.usr}, email/gmail: ${this.gmail}`;
    };
}
const user1 = new prfl("jemala", "usersss@gmails.com", "**");
const user2 = new prfl("tyemala", "tyemala@gmails.com", "**2**");
console.log(user1.dtls());
user1.parolshecvla("*****");
console.log(user2.dtls());
user2.parolshecvla("**********");
