// 1
function arr1(arr1, arr2, arr3) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.copyWithin(5, 0, 3);
    mergedArray.fill(0, 6);
    mergedArray.pop();
    mergedArray.shift();
    mergedArray.unshift(100, 200);
    mergedArray.splice(2, 2, ...arr3);
    let slicedArray = mergedArray.slice(-5);
    return slicedArray.join(",");
}

// 2
let students = ["asdfafs", "asdfasdfaserfd"];
let grades = [85, 90];

function arr2(name, grade) {
    students.unshift(name);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}

function replaceGrade(indx, newGrade) {
    grades.splice(indx, 1, newGrade);
    return grades;
}

function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}

// 3
let playlist = ["gsdfhsbfdf", "fgadfgcv", "gdafgad"];

function addSong(song) {
    playlist.unshift(song);
    return playlist;
}

function removeLastSong() {
    playlist.pop();
    return playlist;
}

function moveSongs() {
    playlist.copyWithin(playlist.length - 2, 0, 2);
    return playlist;
}

function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}

// 4
let citem = ["Apple", "Banana"];
let prices = [1.2, 0.8];

function addItem(item, price) {
    citem.unshift(item);
    prices.unshift(price);
    return { citem, prices };
}

function removeFirstItem() {
    citem.shift();
    prices.shift();
    return { citem, prices };
}

function replaceItem(indx, nitme, nprice) {
    citem.splice(indx, 1, nitme);
    prices.splice(indx, 1, nprice);
    return { citem, prices };
}

function createReceipt() {
    return citem.join(", ");
}

function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}


// 5
let lib = [
    { title: "Book A", copies: 3 },
    { title: "Book B", copies: 5 }
];

function addBook(book) {
    lib.push(book);
    return lib;
}

function removeLastBook() {
    lib.pop();
    return lib;
}

function updateBookCopies(title, copies) {
    let indx = lib.findIndex(book => book.title === title);
    if (indx !== -1) {
        lib.splice(indx, 1, { ...lib[indx], copies });
    }
    return lib;
}

function listBooks() {
    return lib.map(book => book.title).join(", ");
}

function extractBooks(start, end) {
    return lib.slice(start, end);
}

function modifyBooks() {
    lib.copyWithin(lib.length - 1, 0, 1);
    return lib;
}

function resetCopies(newCopies) {
    lib = lib.map(book => ({ ...book, copies: newCopies }));
    return lib;
}

function removeFirstBook() {
    lib.shift();
    return lib;
}

function addFirstBook(book) {
    lib.unshift(book);
    return lib;
}
