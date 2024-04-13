const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png",
];

const captionArray = [
  "This is witty",
  "This is not so Witty",
  "This might be the wittiest",
  "One witty to witty them all",
];

let v1 = document.getElementById("random-meme");
let heading2 = document.getElementById("random-caption");
let button1 = document.getElementById("generator-button");

button1.addEventListener("click", function () {
  let rand1 = Math.floor(Math.random() * 4);
  let rand2 = Math.floor(Math.random() * 4);

  v1.src = memeArray[rand1];
  heading2.innerText = captionArray[rand2];
});
