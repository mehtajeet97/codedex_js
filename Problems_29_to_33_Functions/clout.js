//Problem 32 : Clout

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2300, 453, 5222, 6733, 7402, 8334];
const recentYouTubeViews = [989, 2300, 453, 5222, 6733, 7402, 8334];

function mean(viewsArray) {
  let totalViews = 0;
  for (let i = 0; i < viewsArray.length; i++) {
    totalViews += viewsArray[i];
  }
  return totalViews / viewsArray.length;
}

function median(viewsArray) {
  let sortedStats = [];
  let middleIndex = 0;
  sortedStats = viewsArray.sort(function (a, b) {
    return a - b;
  });
  if (sortedStats.length % 2 !== 0) {
    middleIndex = Math.floor(sortedStats.length / 2);
    return sortedStats[middleIndex];
  } else {
    middleIndex = sortedStats.length / 2;
    return mean([sortedStats[middleIndex], sortedStats[middleIndex - 1]]);
  }
}

// Mean
console.log(mean(recentInstagramViews));
console.log(mean(recentTikTokViews));
console.log(mean(recentYouTubeViews));

// Median
console.log(median(recentInstagramViews));
console.log(median(recentTikTokViews));
console.log(median(recentYouTubeViews));
