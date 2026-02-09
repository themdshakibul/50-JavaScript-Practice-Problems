// 1. বয়স দিয়ে vote দিতে পারবে কিনা চেক করো
//! Ans:
let age = 18;
if (age >= 18) {
  console.log("Vote Dite Parba");
} else {
  console.log("Vot Dite Parba na");
}

// 2. একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো
//! Ans:
let number = 100;
if (number > 100) {
  console.log("Bigest Then 100");
} else {
  console.log("100 of Smaller Then 100");
}

// 3. Student এর mark দিয়ে grade বের করো
//! Ans:
let mark = 80;
if (mark >= 80) {
  console.log("A+");
} else if (mark >= 70) {
  console.log("A");
} else if (mark >= 60) {
  console.log("A-");
} else if (mark >= 50) {
  console.log("B");
} else if (mark >= 40) {
  console.log("C");
} else {
  console.log("Faill");
}

// 4. Leap year চেক করার প্রোগ্রাম লেখো
//! Ans:
let year = 2030;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not leap yer");
}

// 5. তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো
//! Ans:
let a = 30;
let b = 50;
let c = 10;

if (a > b && a > c) {
  console.log("Lerges A");
} else if (b > c && b > a) {
  console.log("Lerges B");
} else {
  console.log("Lerges C");
}

// 6. Login system বানাও (email && password চেক)
//! Ans:
let email = "contact.example@gamil.com";
let password = "Password1223";

let currectEmail = "contact.example@gamil.com";
let currectPassword = "Password1223";

if (email === currectEmail && password === currectPassword) {
  console.log("Loging Successfull");
} else {
  console.log("Invalid Email or Password");
}

// 7. Ternary operator দিয়ে even/odd চেক করো
//! Ans:

let even = 20;
let odd = 40(even % 2 == 0 && odd % 2 == 0 ? odd : even);
