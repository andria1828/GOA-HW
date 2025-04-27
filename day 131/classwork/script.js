try {
    var1 = 10; 
} catch (error) {
    console.log(error.message);
}

try {
    function duplicateParams(a, a) {
        return a;
    }
} catch (error) {
    console.log(error.message);
}

function funcc() {
    "use strict";
    try {
        varl = 20; 
    } catch (error) {
        console.log(error.message);

    }
}



funcc();