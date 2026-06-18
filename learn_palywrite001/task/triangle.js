function triangle(n) {
    for (let i = n; i > 0; i--) {
        let row = " ";
        for (let j = 0; j < n - i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

const n = 5;
triangle(n);

//https://github.com/vandananishad30/learnplaywright/tree/main/learn_palywrite001