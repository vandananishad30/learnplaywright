// Difference between null vs undefined in JavaScript

// undefined: variable declared but not assigned a value
let a;
console.log(a);           // undefined
console.log(typeof a);    // "undefined"

// null: explicitly assigned "no value"
let b = null;
console.log(b);           // null
console.log(typeof b);    // "object" (historical JS bug)

// Key differences:
console.log(null == undefined);   // true  (loose equality)
console.log(null === undefined);  // false (strict equality)

console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
