// 48. দুটি সংখ্যার যোগফল বের করার function লেখো
//! Ans:
function twoSumOfNumbers(num1, num2) {
  total = num1 + num2;
  return total;
}

console.log(twoSumOfNumbers(20, 40));

// 49. even/odd চেক করার function লেখো
//! Ans:
function numberOfEvenOdd(number) {
  for (let i = 1; i < number; i++) {
    if (number % 2 === 0) {
      return "Even Numbers";
    } else {
      return "Odd Numbers";
    }
  }
}

console.log(numberOfEvenOdd(20));

// 50. array এর সব সংখ্যার sum বের করার function লেখো
//! Ans:
function gotSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let gotSumArray = gotSum([120, 30, 50, 60]);
console.log(gotSumArray);

// 51. string reverse করার function লেখো
//! Ans:
function stringReverse(arr) {
  rev = "";
  for (let cha of arr) {
    rev = cha + rev;
  }
  return rev;
}

let nameReverse = stringReverse("Md Rokibul Islam");
console.log(nameReverse);

// 52. leap year check function লেখো
//! Ans:
function leapYear(year) {
  if (year % 2 === 0 && 4 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
console.log(leapYear(2003));

// 53. array থেকে largest number বের করার function লেখো
//! Ans:
function largestNumberd(arr) {
  return Math.max(...arr);
}
const numbers = [100, 200, 400, 500];
console.log(largestNumberd(numbers));

// 54. unit convert করার function লেখো (inch → feet)
//! Ans:

// 55. calculator function বানাও (add, sub, mul, div)
//! Ans:


