// 1. let, const, var দিয়ে একই ভ্যারিয়েবল declare করে পার্থক্য দেখাও
//! Ans:
let names = "Md Shakibul Islam"; // let: value change করা যায় (reassign করা যায়)
const age = 20; // const: value change করা যায় না (fixed)
var location = "Manikgonj Dhaka";  // var: পুরোনো way, এখন সাধারণত ব্যবহার করা হয় না

console.log(names);
console.log(age);
console.log(location);

// 2. একটি ভ্যারিয়েবলের type চেক করো (typeof)
//! Ans:
let name = "Shakibul";
console.log(typeof name);

// 3. string কে number এ convert করো
//! Ans:
let number = "2000";
let convert = Number(number);
console.log(convert);

// 4. number কে string এ convert করো
//! Ans:
let numbers = 20;
let converts = String(numbers);
console.log(typeof converts);

// 5. NaN কিভাবে তৈরি হয় তার উদাহরণ দেখাও
//! Ans:
let x = Number("The Name")
console.log(x) // NaN