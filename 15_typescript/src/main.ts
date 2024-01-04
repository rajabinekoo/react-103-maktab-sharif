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
  avatar?: string;
};

const user1: userType = {
  first_name: "ali",
  last_name: "rajabi",
  email: "ali.rajabinekoo@gmail.com",
  id: 1,
};

type personType = userType & {
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
  email: "ali.rajabinekoo@gmail.com",
};

// polymorphism -> chand rikhti | chand shekli
function greeting(input: personType | userType) {
  return `Hello ${input.first_name} ${input.last_name} with id number ${input.id}.`;
}

// console.log(greeting(person1));
// console.log(greeting(user1));

// generic functions - not important

type userInfo = Partial<userType>;
type omittedUserInfo = Omit<userType, "first_name" | "last_name">;
type pickedUserInfo = Pick<userType, "first_name" | "last_name">;
type numericObject = { [key: string]: number };

const userInfo3: userInfo = { id: 1, first_name: "mohammad" };
const numreicObject1: numericObject = { id: 1, test: 4 };

function userInfoExtractor<T, B>(input: string, input2: B): T {
  const a: B = input2;
  // console.log(a);
  return JSON.parse(input) as T;
}

const userInfo1 = userInfoExtractor<userType, number>(
  JSON.stringify(person1),
  12
);

//  ---------------- interface - inheritance ----------------

interface IUserInfo {
  first_name: string;
  last_name: string;
}

interface IUser {
  id: number;
  email: string;
  avatar?: string;
}

const user2: IUser = {
  email: "ali.rajabinekoo@gmail.com",
  id: 1,
};
const userInfo2 = userInfoExtractor<IUser, number>(JSON.stringify(person1), 12);

interface IStudent extends IUser, IUserInfo {
  studentId: number;
  collegeName: string;
}

interface IEmployee extends IUser, IUserInfo {
  employeeId: number;
  departmentName: string;
}

const student1: IStudent = {
  first_name: "ali",
  last_name: "rajabi",
  studentId: 369,
  collegeName: "azad",
  id: 1,
  email: "ali.rajabinekoo@gmail.com",
};

const employee1: IEmployee = {
  first_name: "ali",
  last_name: "rajabi",
  employeeId: 369,
  departmentName: "it",
  id: 1,
  email: "ali.rajabinekoo@gmail.com",
};

// polymorphism for interfaces -> chand rikhti | chand shekli
function greeting1(input: IEmployee | IStudent) {
  return `Hello ${input.first_name} ${input.last_name} with id number ${input.id}.`;
}
function greeting2(input: IUser & IUserInfo) {
  return `Hello ${input.first_name} ${input.last_name} with id number ${input.id}.`;
}

// console.log(greeting1(student1));
// console.log(greeting2(employee1));

interface INumeric {
  [key: string]: number;
}

const numreicObject2: INumeric = { id: 1 };

// -------------------- class --------------------

// function AnimalContructorFunction(
//   name: string,
//   aging: number,
//   color: string,
//   vegan: boolean,
//   iq: number,
//   category: animalCategory,
//   song: string
// ) {
//   this.name = name;
//   this.aging = aging;
// }

type animalCategory = "khazande" | "parande" | "abzi" | "pestandar" | "";

// inheritance
class AnimalBase {
  name: string = "";
  aging: number = 0;

  constructor(name: string, aging: number) {
    this.name = name;
    this.aging = aging;
  }
}

class Animal extends AnimalBase {
  color: string = "";
  vegan: boolean = false;
  iq: number = 0;
  category: animalCategory = "";
  song: string = "";

  constructor(
    name: string,
    aging: number,
    color: string,
    vegan: boolean,
    a: number,
    category: animalCategory,
    song: string
  ) {
    super(name, aging);
    this.color = color;
    this.vegan = vegan;
    this.iq = a;
    this.category = category;
    this.song = song;
    // this refers to internal fields
  }

  speak(): string {
    // this refers to object fields
    return `${this.name} says ${this.song}`;
  }

  teach() {
    this.iq += 10;
  }
}

class Human extends AnimalBase {
  private mobileNumber: string = "";

  // constructor attributes shorthand
  constructor(a: string, b: number, public iq: number, private msg: string) {
    super(a, b);
  }

  public speak(): string {
    return `${this.name} says ${this.msg}`;
  }

  private mobileNumberNormalizer(mobNum: string) {
    const normalized = mobNum.replace("+98", "").replace("09", "");
    if (normalized.length !== 10) {
      throw new Error("Invalid phone number");
    }
    return normalized;
  }

  // setters and getters - simple
  public getMobileNumber(): string | undefined {
    return !!this.mobileNumber ? `09${this.mobileNumber}` : undefined;
  }

  public setMobileNumber(mobileNumber: string): void {
    this.mobileNumber = this.mobileNumberNormalizer(mobileNumber);
  }

  // setters and getters - standard
  public get phoneNumber(): string | undefined {
    return !!this.mobileNumber ? `09${this.mobileNumber}` : undefined;
  }

  public set phoneNumber(mobileNumber: string) {
    this.mobileNumber = this.mobileNumberNormalizer(mobileNumber);
  }
}

const kalagh1 = new Animal(
  "Kalagh",
  15,
  "black",
  false,
  30,
  "parande",
  "ghar ghar"
);
const kalagh2 = new Animal(
  "Kalaghe sepid",
  20,
  "white",
  false,
  40,
  "parande",
  "ghaaaaaar ghaaaaaar"
);
// console.log(kalagh1.speak());
// console.log(kalagh2.speak());
// console.log(kalagh2);
// kalagh2.teach();
console.log(kalagh2.iq);

const human1 = new Human("Nicola", 40, 210, "freedom of tech");
// console.log(human1.getMobileNumber());
// human1.setMobileNumber("+989212212211");
// console.log(human1.getMobileNumber());

console.log(human1.phoneNumber);
human1.phoneNumber = "+989212212211";
console.log(human1.phoneNumber);

// polymorphism model 1
// console.log(human1.speak());
// console.log(kalagh2.speak());

// polymorphism model 2
function increaseAging(input: Human | Animal) {
  // input.speak();
  input.aging++;
}
function printAge(input: AnimalBase) {
  console.log(`${input.name} age:`, input.aging);
}

// increaseAging(human1);
// increaseAging(kalagh2);

// printAge(kalagh2);
// printAge(human1);
