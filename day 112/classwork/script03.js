function findMultiples(ii, l) {
    const m = [];
    for (let i = ii; i <= l; i += ii) {
      m.push(i);
    }
    return m;
  }
  