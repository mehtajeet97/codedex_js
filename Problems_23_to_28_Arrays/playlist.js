// Problem 26 : Music Playlist

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping",
];

// Remove first and last elements
musicPlaylist.shift();
musicPlaylist.pop();

// Add one element to the end of array
musicPlaylist.push("Numb");

// Add two new elements to the beginning of the array
musicPlaylist.unshift("Counting Stars");
musicPlaylist.unshift("Hym for the Weekend");

console.log(musicPlaylist);
