// let variable_name: variable_type = value
// let variable_name = value as variable_type

let num1: number = 1;
let msg: string = "this is TS";
// bad idea (union type)
// let isHappy: string | boolean | number = 1;
// good idea (union type)
let isHappy = 1 as isSomething;
let isNervios: isSomething = 0;

let numbersList: number[] = [1, 2, 3];
let numbersList2: Array<number> = [1, 2, 3];

// object type

export type userType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const user1: userType = {
  first_name: "ali",
  last_name: "rajabi",
  email: "ali.rajabinekoo@gmail.com",
  avatar: "",
  id: 1,
};

type personType = {
  first_name: string;
  last_name: string;
  id: number;
  national_id: string;
  nationality: string;
  age?: number;
};

const person1: personType = {
  first_name: "ali",
  last_name: "rajabi",
  national_id: "abcd",
  nationality: "iran",
  id: 1,
};

// polymorphism -> chand rikhti | chand shekli
function greeting(input: personType | userType) {
  return `Hello ${input.first_name} ${input.last_name} with id number ${input.id}.`;
}

console.log(greeting(person1));
console.log(greeting(user1));

// generic functions - not important

type userInfo = {
  fname: string;
  lname: string;
  id: number;
};

function userInfoExtractor<T>(input: personType | userType): T {
  return { fname: input.first_name, lname: input.last_name, id: input.id } as T;
}

let userInfo1 = userInfoExtractor<userInfo>(user1);

console.log(userInfo1);
