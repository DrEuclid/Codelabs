function unordered(No) {
let a = Object.keys(No);
let b = Object.values(No);
let c = [a,b];
return c;
}

console.log (unordered({ a: 1, b: 2, c:3}));