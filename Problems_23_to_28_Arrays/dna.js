// Problem 28 : DNA

const dnaPieces = ["A", "C", "G", "T"];

let myDNA = [];

for (let i = 0; i < 24; i++) {
  myDNA.unshift(
    dnaPieces[Math.floor(Math.random() * dnaPieces.length)] +
      dnaPieces[Math.floor(Math.random() * dnaPieces.length)] +
      dnaPieces[Math.floor(Math.random() * dnaPieces.length)]
  );
}

console.log(myDNA);
