function sumNumbers(...n) {
    return n.length === 0 ? 0 : n.reduce((sum, num) => sum + num, 0);
}
