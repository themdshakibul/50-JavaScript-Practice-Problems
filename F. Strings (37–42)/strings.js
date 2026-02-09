// 37. একটি string এর length বের করো
//! Ans:
let len = "Md Shakibul Islam";
let totalLength = len.length;
console.log(totalLength);

// 38. string কে uppercase করো
//! Ans:
let name = "Md Shakibul Islam";
let upper = name.toUpperCase();
console.log(upper);

// 39. string এর মধ্যে নির্দিষ্ট word আছে কিনা চেক করো
//! Ans:
let language = "I Love JavaScript Language";
let fineWords = "I";
let napaile = false;

let word = language.split(" ");

for (let i = 0; i < word.length; i++) {
  if (word[i] === fineWords) {
    napaile = true;
    break;
  }
}
console.log(napaile);

// 40. একটি sentence থেকে সব word আলাদা করো
//! Ans:
let words = "Hii Frontend Developer";

let wordSlice = words.split(" ");
console.log(wordSlice);

// 41. string reverse করো
//! Ans:
let sentence = "The Md Shakibul Islam";
let reverse = " ";

for (let letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse);

// 42. string palindrome কিনা চেক করো
//! Ans:

// madam
let str = "racecar";

let palindrome = str.split("").reverse().join("");

if (palindrome === str) {
  console.log(true);
} else {
  console.log(false);
}



