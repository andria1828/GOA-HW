let name = prompt('enter your name')
let age =  Number(prompt('enter your age'))
let workingplace = Number(prompt('enter your working place km'))
let workindays = Number(prompt('enter your days form 0 to 7'))
let car 

if(age < 16) {
    console.log("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან:");
}
else if(age >= 16 && age <= 65) {
    if(workingplace >= 0 && workingplace < 5){
        console.log('velosipedi');
    }
    else if(workingplace >= 5 && workingplace < 20) {
        console.log("manqana");
    }
    else {
        console.log("matarebeli");
    }
}

if (workindays >= 5){
    console.log('გთავაზობთ შეღავათების მიღება ტრანსპორტზე');
}

