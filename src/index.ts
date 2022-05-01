let id: number = 5;
let str: string = "hello";
let bool: boolean = false;
let x: any = "hi";

let ids: number[] = [1, 2, 3];
let arr: any = [1, "hey", 3];

let touple: [number, string, boolean] = [1, "howdy", true];
let toupleArr: [number, string][] = [
  [1, "bye"],
  [2, "cya"],
];

let union: string | number = 22;

enum Direction1 {
  Up = 2,
  Down,
  Left,
  Right,
}

const user: { id: number; name: string } = {
  id: 1,
  name: "john",
};

// type assertion
let cid: any = 1;
let custId = <number>cid;
let custIdas = cid as number;

//fns
const addNum = (x: number, y: number): number => x + y;
console.log(addNum(10, 20));

const message = (msg: string | number): void => console.log(msg);
console.log(message(2));

//interface
// cant use with primitives or unions
interface UsersInterface {
  id: number;
  name: string;
  age?: number;
  readonly address?: string;
  register(): string;
}

// const u1: UsersInterface = {
//   id: 1,
//   name: "john",
// };

interface MathFn {
  (x: number, y: number): number;
}
const add: MathFn = (x: number, y: number): number => x + y;
const sub: MathFn = (x: number, y: number): number => x - y;
console.log(add(10, 5));
console.log(sub(10, 5));

class Person implements UsersInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const hm = new Person(1, "hm");
console.log(hm);

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "sara", "dev");
console.log(emp, emp.register());

const getArr = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

let numArr = getArr<number>([1, 2, 3, 5]);
let strArr = getArr<string>(["hi", "you"]);

strArr.push("babe");
