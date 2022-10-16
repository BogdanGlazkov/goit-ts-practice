"use strict";
let age;
age = 50;
let nameT;
nameT = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === 'string') {
    str = some;
}
;
let person;
person = ["Max", 21];
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
;
function calc(num1, num2) {
    return num1 + num2;
}
;
function customError() {
    throw new Error("Error");
}
;
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=types.js.map