function frt1(fruit) {
    const c = fruit.slice(1, 3);
    fruit.splice(fruit.length - 2, 2, 'fig');
    const frtstr = fruit.join('-');
    return frtstr;
}
