// 43. একটি object তৈরি করো student info দিয়ে
//! Ans:

const student = {
  name: "Md Shakibul Islam",
  roll: 24,
  age: 18,
  college: "FPI",
  info: {
    CGPA: 3.5,
    averageMark: 78,
  },
};

console.log(student.age);
console.log(student.info.CGPA);

// 44. object থেকে সব key print করো
//! Ans:
const cars = {
  car: "BMW",
  carColor: "red",
  company: "Tesla",
  price: 12289889,
  car2: {
    carname: "Fiat",
    carmodel: 500,
    carweight: "800kg",
    carColor: "white",
  },
};

console.log(cars);

// 45. object এর সব value print করো
//! Ans:
const person = {
  firstName: "Md Shakibul",
  lastName: "Islam",
  id: 5566,
  age: 18,
};

const value = Object.values(person);

for (let val of value) {
  console.log(val);
}

// 46. object এর মধ্যে নির্দিষ্ট property আছে কিনা চেক করো
//! Ans:
const naemes = {
  name: "Rokibul",
  age: 20,
  dateOfBirth: 2007,
  name: {
    name: "Akib",
    name: "Dakib",
    age: 20,
    nickName: {
      name: "Rakib",
    },
  },
};

console.log(naemes.name.nickName);
console.log("name" in naemes.name.nickName);

// 47. object এর উপর loop চালাও
//! Ans:
const persons = {
  firstName: "Md Rakibul",
  lastName: "Islam",
  age: 16,
  height: 5.6,
  collegeName: {
    college: "ghior GVT college",
    sub: "Scince",
    CGPA: 4.8,
  },
};

for(let pers in persons){
  console.log(pers, persons[pers])
}
