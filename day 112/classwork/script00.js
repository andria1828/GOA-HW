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
  