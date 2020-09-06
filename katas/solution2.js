function findMultiples(integer, limit) {
    const multiples = [];
    for (let j = integer; j <= limit; j++) {
        if (j % integer === 0) {
            multiples.push(j);
        }
    }
    return multiples;
}