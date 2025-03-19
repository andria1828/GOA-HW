const arrmain = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

const arr1 = arrmain.flat(1);
console.log(arr1);
const arr9999 = arrmain.flat(Infinity);
console.log(arr9999);
function chkelement(array, value) {
    return array.includes(value);
}
console.log(chkelement(arr9999, 5));
console.log(chkelement(arr9999, 10));
function findindx(array, value) {
    return array.indexOf(value);
}
console.log(findindx(arr9999, 4));
console.log(findindx(arr9999, 10));
function arlstindex(array, value) {
    return array.lastIndexOf(value);
}
console.log(arlstindex(arr9999, 6));
console.log(arlstindex(arr9999, 10));
