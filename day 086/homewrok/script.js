// 1
function calculator(n1, n2,oprt) {
    if (oprt === '+'){
        return n1 + n2;
    }
    else if (oprt === '-'){
        return n1 - n2;
    }
    else if (oprt === '*'){
        return n1 * n2;
    }
    else if (oprt === '/'){
        return n1 / n2;
    }
    else {
        return "არასწორი მოქმედება!!!!!!!!!!!!!!!!!!";
    }
}

alert(calculator(10,20,'*'))

// 2

function even(n){
    if (n % 2 === 0){
        return "ეს რიცხვი არის ლუწია";
    }
    else {
        return 'ეს რიცხვი არის კენტი';
    }
}

alert(even(2))

// 3
function sqvr(x){
    return x ** 2;
}
alert(sqvr(2))

// 4

function chn(a){
    if (a > 0){
        return 'რიცხვი დადებითია'
    }
    else if (a < 0){
        return 'რიცხვი უარყობითია'
    }
    else if (a === 0){
        return 'ნულის ტოლია'
    }
}
alert(chn(5))

