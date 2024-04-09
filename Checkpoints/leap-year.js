// CheckPoint 3 : Leap Year

console.log("Birthdays are good for your health.");
console.log("Studies have shown that people with more birthdays live longer.");
console.log(
  "RIP people born on the 29th of February in the following years : "
);

for (let i = 2000; i <= 3000; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    console.log(i);
  }
}
