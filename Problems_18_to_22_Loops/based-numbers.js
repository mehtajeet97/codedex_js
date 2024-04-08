// Problem 22 : Based Numbers

let myNumber = 20;
let binary = "";
console.log("Number selected : " + myNumber);

while (myNumber > 0) {
  if (myNumber % 2 === 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
  myNumber = Math.floor(myNumber / 2);
}
console.log("Binary Equivalent : " + binary);
