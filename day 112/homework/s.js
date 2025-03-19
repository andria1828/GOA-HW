// 1
function sameCase(a, b) {
    const ax = /^[a-zA-Z]$/.test(a);
    const xa = /^[a-zA-Z]$/.test(b);
  
    if (!ax || !xa) {
      return -1;
    }
  
    const axLower = a === a.toLowerCase();
    const xaLower = b === b.toLowerCase();
  
    if (axLower && xaLower) {
      return 1;
    }
  
    const axUpper = a === a.toUpperCase();
    const xaUpper = b === b.toUpperCase();
  
    if (axUpper && xaUpper) {
      return 1;
    }
  
    return 0;
  }

// 2
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
    let pstc = 0;
    let ngsc = 0;
    for (let number of input) {
      if (number > 0) {
        pstc++;
      } else if (number < 0) {
        ngsc += number;
      }
    }
    return [pstc, ngsc];
  }
//   3

function findMultiples(ii, l) {
    const m = [];
    for (let i = ii; i <= l; i += ii) {
      m.push(i);
    }
    return m;
  }
  