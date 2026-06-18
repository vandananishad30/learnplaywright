function inverted_triangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

const n = 5;
inverted_triangle(n);

