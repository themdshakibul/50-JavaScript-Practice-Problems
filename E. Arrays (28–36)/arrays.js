// 28. একটি array তৈরি করে সব element print করো
//! Ans
let numbers = [10, 20, 30, 40, 50, 70];
// for of loop
for (const number of numbers) {
  // console.log(number)
}
// for loop
for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

// 29. array এর length বের করো
//! Ans
const name = ["Md Shakibul Islam", "Rokibul", "Robiul"];
const length = name.length;
// console.log(length);

// 30. array থেকে প্রথম ও শেষ element বের করো
//! Ans
const arr = [10, 20, 30, 40, 50, 60, 70];

// console.log("Array First element :", arr[0]);
// console.log("Array Last element :", arr[arr.length - 1]);

// 31. array এর সব সংখ্যার যোগফল বের করো
//! Ans
const array = [10, 20, 30, 22, 33, 22, 11];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += array[i];
}
// console.log("Array total Additional sum of :", sum);

// 32. array থেকে even সংখ্যাগুলো বের করো
//! Ans
const arra = [4, 5, 10, 12, 22, 33, 45, 1];

//! for of loop
for (const arr of arra) {
  if (arr % 2 === 0) {
    // console.log(arr);
  }
}

// 33. array এর মধ্যে largest number বের করো
//! Ans
const num = [11, 4, 200, 500, 55, 66, 88, 330];
let largest = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > largest) {
    largest = num[i];
  }
}
console.log(largest);

// 34. array reverse করো
//! Ans
let names = ["Shakibul", "Rokibul", "Rusha", "Khalid"];
names.reverse();
console.log(names);

// 35. array sort করো (numeric)
//! Ans
let numb = [100, 200, 33, 44, 55, 600, 11, 22, 44, 55, 66, 77, 88, 99];
const sortnumbers = numb.sort((a, b) => {
  return a - b;
});
console.log(sortnumbers);

const res = numb.sort(function (x, y) {
  return x - y;
});
console.log(res);

// 36. array থেকে duplicate remove করো
//! Ans
const arrays = [20, 40, 50, 30, 20, 44, 66, 40];

function removeDuplicates(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (!newArray.includes(arrays[i])) {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
}


const remove = removeDuplicates(arrays)
console.log(remove)