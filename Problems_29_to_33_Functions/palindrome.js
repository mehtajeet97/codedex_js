// Problem 33 : Palindrome

function isPalindrome(word) {
  word = word.trim().toLowerCase();
  let start = 0;
  let end = word.length - 1;

  while (start <= end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("aviary"));
