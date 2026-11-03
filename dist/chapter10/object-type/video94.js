"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Object Type");
//optinal
const sv1 = {
    name: "an",
    id: 321,
};
const sv2 = {
    name: "truong",
    id: 131,
    phone: 9131,
};
const person = {
    name: "hinhsunhi",
    age: 25,
    address: "hanoi",
    isHandsome: true,
};
const printInfor = (people) => {
    console.log("Your name: ", people.name);
};
printInfor(person);
