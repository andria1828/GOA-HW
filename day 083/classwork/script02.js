let num1 = Number(prompt("enter first number"));
let num2 = Number(prompt("enter second number"));

let operatori = prompt("აირჩიე ოპერატორი (+, -, *, /)");
let rslt = "";

if (operatori === "+") {
    rslt = num1 + num2;
} else if (operatori === "-") {
    rslt = num1 - num2;
} else if (operatori === "*") {
    rslt = num1 * num2;
} else if (operatori === "/") {
    if (num2 === 0) {
        alert("ნული არ შეიძლება იყოს გამყოფი");
        rslt = ""; 
    } 
    else if (num1 === 0) {
        alert("ნული არ შეიძლება იყოს გამყოფი");
        rslt = "";   
    }
    else {
        rslt = num1 / num2;
    }
} else {
    alert("რაღაცა უცხო გაქვს შეყვანილი");
    rslt = ""; 
}

if (rslt !== "") {
    alert(rslt);  
}

