const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
function arrm(arr) {
    let arr3 = arr.concat(arr2);

    console.log(arr3);

    arr3.copyWithin(arr3.length - 2, 5, 2);

    console.log(arr3);

    arr3.fill(0, arr3.length - 3);

    console.log(arr3);

    const lastElement = arr3.pop();

    console.log(lastElement);

    console.log(arr3);

    const fe = arr3.shift();

    console.log(fe);

    console.log(arr3);

    arr3.unshift(10, 20);

    console.log(arr3);

    return arr3;
}
