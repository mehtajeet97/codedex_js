let v1 = document.getElementById("stone");

let randomNumber = Math.floor(Math.random() * 9);

if (randomNumber === 1) {
  v1.style.backgroundColor = "red";
} else if (randomNumber === 2) {
  v1.style.backgroundColor = "orange";
} else if (randomNumber === 3) {
  v1.style.backgroundColor = "yellow";
} else if (randomNumber === 4) {
  v1.style.backgroundColor = "green";
} else if (randomNumber === 5) {
  v1.style.backgroundColor = "blue";
} else if (randomNumber === 6) {
  v1.style.backgroundColor = "#4169e1";
} else if (randomNumber === 7) {
  v1.style.backgroundColor = "#00008b";
} else if (randomNumber === 8) {
  v1.style.backgroundColor = "purple";
} else {
  v1.style.backgroundColor = "black";
}
