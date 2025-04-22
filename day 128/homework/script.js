// 1

function longest(s1, s2) {
  const c = new Set(s1 + s2);
  return [...c].sort().join('');
}

// 2

function XO(str) {
    str = str.toLowerCase();
    const xCount = str.split('').filter(char => char === 'x').length;
    const oCount = str.split('').filter(char => char === 'o').length;
    return xCount === oCount;
}

// 3

function filter_list(l) {
    const result = [];
    for (let i of l) {
        if (typeof i === 'number') {
            result.push(i);
        }
    }
    return result;
}

// 4

function sumTwoSmallestNumbers(numbers) {  
  const s = numbers.sort((a, b) => a - b);
  return s[0] + s[1];
}

// 5

function smallEnough(a, limit) {
  return a.every(num => num <= limit);
}