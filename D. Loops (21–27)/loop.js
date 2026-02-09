// 21. 1 থেকে 10 পর্যন্ত সংখ্যা print করো
//! Ans:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 22. 1 থেকে 50 পর্যন্ত even সংখ্যা print করো
//! Ans:
for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

// 23. 10 থেকে 1 পর্যন্ত reverse loop চালাও
//! Ans:
for (let i = 20; i >= 1; i--) {
  console.log(i);
}

// 24. একটি সংখ্যার নামতা print করো
//! Ans:
const num = 5;

for (let i = 1; i <= 10; i++) {
  total = num * i;
  console.log(total)
}

// 25. 1 100 এর মধ্যে 3 দিয়ে divisible সংখ্যা বের করো
//! Ans:
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 26. loop ব্যবহার করে sum বের করো
//! Ans:
let sum = 0;
for (let i = 0; i <= 30; i++) {
  sum += i;
}
console.log(sum);

// 27. break ব্যবহার করে loop থামাও
//! Ans:
for (let i = 0; i <= 20; i++) {
  if (i > 10) {
    break;
  }
  console.log(i);
}
