// Problem 21 " Even the Odds"

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
  if (i === 42) {
    break;
  }
}
