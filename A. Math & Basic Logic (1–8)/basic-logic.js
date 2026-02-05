// 1. দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো
//! Ans:
let num1 = 10;
let num2 = 20;
let Addition = num1 + num2;
console.log("Addition of 2 Number is :", Addition);

// 2. দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ বের করো
//! Ans:
let num3 = 20;
let num4 = 30;
let Additon = num3 - num4;
let Multiplaction = num3 * num4;
let Division = num3 / num4;
console.log("Additon :", Addition);
console.log("Multiplaction :", Multiplaction);
console.log("Division :", Division);

// 3. একটি সংখ্যা even না odd চেক করো
//! Ans:
let num = 10;
if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// 4. একটি সংখ্যা positive, negative না zero চেক করো
//! Ans:

let a = 10;

if (a > 0) {
  console.log("Positive");
} else if (a < 0) {
  console.log("Negative");
} else {
  console.log("zero");
}

// 5. তিনটি সংখ্যার গড় (average) বের করো
//! Ans:
let x = 10;
let y = 20;
let z = 40;

let sum = z + y + z;
let average = sum / 3;
console.log("Total average Number is :", average.toFixed(3));

// 6. Celsius থেকে Fahrenheit convert করো
//! Ans:

let celsius = 32;
let Fahrenheit = (celsius * 9) / 5 + 32;
console.log("Fahrenheit is :", Fahrenheit);

// 7. Rectangle এর area বের করো
//! Ans:

let length = 10;
let width = 5;

let area = length * width;
console.log("The Rectangle area is :", area);

// 8. একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো
//! Ans:
let number = 30;

if (number % 3 === 0 && number % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}
