// // 1
function pg() {
    const p = "Group 41 is best";
    let a = 3;
    while (a > 0) {
        let u = prompt('enter password')
        if (u === p) {
            alert('პაროლი სწორია');
            break;
        } else {
            a--;
            alert(`არაა სწორი. ${a} ცდა დაგრჩა`);
        }
    }
    if (a === 0) {
        alert("გამოგელია ცდები");
    }
}
pg();

// 2

function kk(x) {
    let y = 1;
    for(let i = 1; i <= x; i++) {
        y *= i;
    }
    return f;
}

console.log(kk(2));

// 3

function c() {
    for (let i = 100; i >= 0; i--) {
        console.log('დარჩა', i, 'წამი');
    }
}
c();
