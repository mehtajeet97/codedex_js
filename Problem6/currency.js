// Problem 10 : Currency

let yuan = 560;
let yen = 2455;
let won = 3280;

console.log("What do you have left in yuan? ", yuan);
console.log("What do you have left in yen? ", yen);
console.log("What do you have left in won? ", won);

let yuan2dollars = yuan * 0.14;
let yen2dollars = yen * 0.0066;
let won2dollars = won * 0.00074;

let total = yuan2dollars + yen2dollars + won2dollars;

console.log("\n", total);
