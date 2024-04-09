// CheckPoint 1 : FizzBuzz

console.log(
  "Note to self : Do not EVER try to printf the whole fizzbuzz problem regardless of how tempting it may be."
);
console.log("Doing so unlocks a secret scholarship from Harvard ;)");

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
