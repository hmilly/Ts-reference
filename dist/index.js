"use strict";
let id = 5;
let str = "hello";
let bool = false;
let x = "hi";
let ids = [1, 2, 3];
let arr = [1, "hey", 3];
let touple = [1, "howdy", true];
let toupleArr = [
  [1, "bye"],
  [2, "cya"],
];
let union = 22;
var Direction1;
(function (Direction1) {
  Direction1[(Direction1["Up"] = 2)] = "Up";
  Direction1[(Direction1["Down"] = 3)] = "Down";
  Direction1[(Direction1["Left"] = 4)] = "Left";
  Direction1[(Direction1["Right"] = 5)] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
  id: 1,
  name: "john",
};
// type assertion
let cid = 1;
let custId = cid;
let custIdas = cid;
//fns
const addNum = (x, y) => x + y;
console.log(addNum(10, 20));
const message = (msg) => console.log(msg);
console.log(message(2));
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(10, 5));
console.log(sub(10, 5));
class Person {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const hm = new Person(1, "hm");
console.log(hm);
class Employee extends Person {
  constructor(id, name, position) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "sara", "dev");
console.log(emp, emp.register());
const getArr = (items) => {
  return new Array().concat(items);
};
let numArr = getArr([1, 2, 3, 5]);
let strArr = getArr(["hi", "you"]);
strArr.push("babe");
