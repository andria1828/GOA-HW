// 1
num = Number(prompt("please enter number"))

if(num % 2 == 0){
    console.log("ლუწია");
}
else{
    console.log("კენტია");
}
// 2

temp = Number(prompt("please enter temperature"))

if (temp <= 20){
    console.log("its cold");
}
else if(temp <= 25){
    console.log('normal temperature ');
    
}
else if(temp <= 28){
    console.log('its hot temperature ');
}

// 3
let num1 = Number(prompt("Enter your grade: "));

if (num1 >= 90) {
    console.log('A');
} else if (num1 >= 80) {
    console.log('B');
} else if (num1 >= 70) {
    console.log('C');
} else if (num1 >= 60) {
    console.log('D');
} else if (num1 >= 0) {
    console.log('F');
} else {
    console.log('Invalid NUM');
}
