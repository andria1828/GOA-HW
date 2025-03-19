// 1
function modifyArray(narr, stra) {
    let x5 = narr.concat(stra);
    x5.copyWithin(4, 0, 3);
    x5.fill("fgsdfgdfg", 2, 5);
    const lste = x5.pop();
    const x1 = x5.shift();
    x5.unshift(100, 200);
    return x5;
}

// 2
function manipulateObjects(people, places) {
    let x4 = people.concat(places);
    x4.copyWithin(2, 0, 2);
    x4.fill({ city: "Nefdgsdgsdgk" }, x4.length - 2);
    const lste = x4.pop();
    const x1 = x4.shift();
    x4.unshift({ name: "no" }, { name: "sdad" });
    return x4;
}

// 3

function processMixedArray(mixedArray) {
    let x3 = mixedArray.concat([true, false]);
    x3.copyWithin(0, 3, 5);
    x3.fill(0, 5, 8);
    const lste = x3.pop();
    const x1 = x3.shift();
    x3.unshift(null, undefined);
    return x3;
}

