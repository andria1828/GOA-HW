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
  