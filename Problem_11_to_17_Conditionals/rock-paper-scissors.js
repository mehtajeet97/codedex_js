// Problem 17 : Rock Paper Scissors

let player = Math.floor(Math.random() * 3);

if (player === 0) {
  console.log("Player picked : Rock");
} else if (player === 1) {
  console.log("Player picked : Scissors");
} else {
  console.log("Player picked : Paper");
}

let computer = Math.floor(Math.random() * 3);

if (computer === 0) {
  console.log("Computer picked : Rock");
} else if (computer === 1) {
  console.log("Computer picked : Scissors");
} else {
  console.log("Computer picked : Paper");
}

if (
  (player === 0 && computer === 1) ||
  (player === 1 && computer === 2) ||
  (player === 2 && computer === 0)
) {
  console.log("Player Wins!");
} else if (
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1) ||
  (player === 0 && computer === 2)
) {
  console.log("Computer Wins!");
} else {
  console.log("Its a TIE!");
}
