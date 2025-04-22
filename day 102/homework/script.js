function lena(x) {
    return x.length;
}

function concx(x, y) {
    return x.concat(y);
}

function addvtox(x, value) {
    return x.push(value); 
}

function removelast(x) {
    return x.pop(); 
}

function push(x1, x2, value) {
    const x11 = x1.concat(x2);
    x11.push(value);
    return x11;
}

function sarr(x) {
    let c = 0;
    for (let i = 0; i < x.length; i++) {
        c += x[i];
    }
    return c;
}

function indexevenelement(x) {
    const narr = [];
    for (let i = 0; i < x.length; i += 2) {
        narr.push(x[i]);
    }
    return narr;
}

function strlen(x) {
    const x1 = [];
    for (let i = 0; i < x.length; i++) {
        x1.push(x[i].length);
    }
    return x1;
}
