// ================ function ================
function isPrime(num) {
  //   if (num <= 1) {
  //     // alert("Invalid input");
  //     return null;
  //   }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// ================ scope ================
function isPrimeRange(num1, num2) {
  if (num1 <= 1 || num2 <= 1) {
    return null;
  }
  let primeNumbers = [];
  for (let num = num1; num <= num2; num++) {
    // let flag = true;
    // for (let i = 2; i < num; i++) {
    //   if (num % i === 0) {
    //     flag = false;
    //     break;
    //   }
    // }
    // if (flag) primeNumbers.push(num);
    if (isPrime(num)) primeNumbers.push(num);
  }
  return primeNumbers;
}

// console.log(isPrimeRange(5, 12));

// ================ for in - for of ================
// let person1 = {
//   firstName: "Amir",
//   lastName: "Yaseri",
//   email: "amir.yaseri@gmail.com",
// };
// let person1_1 = ["Amir", "Yaseri", "amir.yaseri@gmail.com"];

// console.log(person1.firstName);
// console.log(person1["firstName"]);
// console.log(person1_1[0]);

// for (let key in person1) {
//   console.log(key, person1[key]);
// }

// let keys = Object.keys(person1);
// for (let key of keys) {
//   console.log(key, person1[key]);
// }

// for (let info of person1_1) {
//   console.log(info);
// }

// for (let key in person1_1) {
//   console.log(key, person1_1[key]);
// }

Object.prototype.keys2 = function (obj) {
  let keysArray = [];
  for (const key in obj) {
    if (key === "keys2") continue;
    keysArray.push(key);
  }
  return keysArray;
};

// let person1Keys = Object.keys2(person1);
// console.log(person1Keys);

// ================ kind of functions ================

// invalid invoking
// console.log(sum(1, 2));

const sum = function (num1, num2) {
  return num1 + num2;
};

const sum3 = (num1, num2) => {
  return num1 + num2;
};

const sum4 = (num1, num2) => num1 + num2;

// console.log(sum3(2, 3));
// console.log(sum4(2, 3));

// console.log(globalThis);
// console.log(sum2(1, 2));

function sum5(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// console.log(sum5(1, 2, 3, 4));

function sum6() {
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}

// console.log(sum6(1, 2, 3, 4));

// func hoist
function sum2(num1, num2) {
  return num1 + num2;
}

// var hoist
// var firstName = "ali";
if (true) {
  var firstName = "hassan";
}
function test() {
  var lastName = "hassani";
}
// override
// var firstName = "hosein";
// console.log(firstName);
// console.log(lastName);

// console.log(sum6(1, 2));

// var func hoist
var sum6 = function (num1, num2) {
  return num1 + num2;
};

// ================ Self invoking functions (IIFE) ================

// (function () {
//   console.log("hello world");
// })();

let result = (function () {
  let primeNumbers = [];
  for (let num = 5; num <= 12; num++) {
    if (isPrime(num)) primeNumbers.push(num);
  }
  return primeNumbers;
})();
// console.log(result);

// ================ Closure ================

function outerGreetingFunction(firstName, lastName) {
  // Enclosed by outer function scope
  // Bringing the scopes close together
  function innerGreetingFunction() {
    return `Salam ${firstName} ${lastName}`;
  }
  return innerGreetingFunction;
}

let amirRezaNezamiGreeting = outerGreetingFunction("amir reza", "nezami");
// console.log(amirRezaNezamiGreeting());

function Person(firstName, lastName, email) {
  return {
    getFirstNameValue: () => firstName,
    setFirstNameValue: (_newFirstName) => {
      firstName = _newFirstName;
    },
  };
}

const person2 = Person("ali", "rajabi", "ali.rajabinekoo@gmail.com");
// console.log(person2.getFirstNameValue());
person2.setFirstNameValue("ali2");
// console.log(person2.getFirstNameValue());

function numberRangeValidation(range1, range2) {
  function innerNumberRangeValidation(number) {
    return number >= range1 && number <= range2;
  }
  return innerNumberRangeValidation;
}

function numberRangeValidation2(number, range1, range2) {
  return number >= range1 && number <= range2;
}

// redundancy
// function ageValidation2(age) {
//   return age >= 1 && and <= 100;
// }
// function between10and20Validation2(num) {
//   return num >= 10 && num <= 20;
// }

const ageValidation = numberRangeValidation(1, 100);
const between10and20Validation = numberRangeValidation(10, 20);

const input1 = 140;
const input2 = 15;

// console.log(ageValidation(input1));
// console.log(between10and20Validation(input2));

// ============ constructor function ============

function User(id, username, email) {
  this.id = id;
  this.username = username;
  this.email = email;
  this.uniqueKey = `${id}-${username}`;
  this.greeting = function () {
    console.log(`Salam ${this.username}`);
  };
}

const user1 = new User(1, "ali", "ali@gmail.com");
// console.log(user1);
// user1.greeting();

// ============ factory function ============

function User2(id, username, email) {
  return {
    id,
    username,
    email,
    uniqueKey: `${id}-${username}`,
    greeting() {
      console.log(`Salam ${this.username}`);
    },
  };
}

const user2 = User2(2, "ali2", "ali2@gmail.com");
// console.log(user2);
// user2.greeting();

// ============ callback function ============

// function greetingText(firstName, lastName, cb) {
//   let text = `Hello ${firstName} ${lastName}`;
//   cb(text);
// }

// function greetingTextCB(text) {
//   console.log(text);
// }

// greetingText("Hamed", "Ebrahimi", greetingTextCB);
// console.log("ok1");
// greetingText("Reza", "Mohseni Far", function (text) {
//   console.log(text);
// });
// console.log("ok2");

// =================== with intrrupt ===================

function greetingText(firstName, lastName, cb) {
  let cbTimeout = function () {
    let text = `Hello ${firstName} ${lastName}`;
    cb(text);
  };
  setTimeout(cbTimeout, 1000);
}

function greetingTextCB(text) {
  console.log(text);
}

// greetingText("Hamed", "Ebrahimi", greetingTextCB);
// console.log("ok1");
// greetingText("Reza", "Mohseni Far", function (text) {
//   console.log(text);
// });
// console.log("ok2");

// setTimeout(() => {
//   console.log("ok ok ok");
// }, 3000);

// =================== callbacks hell ===================
// greetingText("Roghiye", "Shaygan", function (text) {
//   console.log(text);
//   greetingText("Soha", "Khosravani", function (text) {
//     console.log(text);
//     greetingText("Ali Asghar", "Seraj Hashemi", function (text) {
//       console.log(text);
//       greetingText("Faeze", "Rezaiy", function (text) {
//         console.log(text);
//       });
//     });
//   });
// });

// =================== bind, call, apply ===================

function test(param1, param2) {
  console.log(this);
  console.log(param1, param2);
}
let test2 = test.bind({}, 1, 2);
test();
test2();
test.call(undefined, 1, 2);
test.apply({ message: "hello" }, [1, 2]);

// =================== this , arrow function => object ===================

const obj = {
  courseName: "React - 103",
  printCourse: function () {
    let cb = function () {
      console.log(this);
      console.log(this.courseName);
    };
    setTimeout(cb.bind(this), 2000);

    setTimeout(() => {
      console.log(this);
      console.log(this.courseName);
    }, 2000);
  },
};

obj.printCourse();
