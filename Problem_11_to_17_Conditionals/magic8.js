// Problem 15 : Magic Ball

let magicNumber = Math.floor(Math.random() * 10);

console.log("Question : Will you find a job?");
if (magicNumber === 0) {
  console.log("Magic 8 Ball : Yes - definitely");
} else if (magicNumber === 1) {
  console.log("Magic 8 Ball : It is decidedly so");
} else if (magicNumber === 2) {
  console.log("Magic 8 Ball : Without a doubt");
} else if (magicNumber === 3) {
  console.log("Magic 8 Ball : Reply hazy, try again");
} else if (magicNumber === 4) {
  console.log("Magic 8 Ball : Ask again later");
} else if (magicNumber === 5) {
  console.log("Magic 8 Ball : Better not tell you now");
} else if (magicNumber === 6) {
  console.log("Magic 8 Ball : My sources say no");
} else if (magicNumber === 7) {
  console.log("Magic 8 Ball : Outlook not so good");
} else {
  console.log("Magic 8 Ball : Very doubtful");
}
