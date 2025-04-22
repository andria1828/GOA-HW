// codewars 1

function sumTwoSmallestNumbers(numbers) {  
    const s = numbers.sort((a, b) => a - b);
    return s[0] + s[1];
  }
  
// codewars 2

function smallEnough(a, limit) {
    return a.every(num => num <= limit);
  }
  