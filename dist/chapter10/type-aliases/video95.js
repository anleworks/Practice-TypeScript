"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Type Aliases");
const student1 = {
    id: "sv1",
    name: "anlee",
    address: "hanoi",
    age: 25,
};
const student2 = {
    id: "sv2",
    name: "truong",
    address: "vinhphuc",
    age: 25,
};
const printInfo = (st) => {
    console.log("student name : ", st.name);
};
printInfo(student1);
printInfo(student2);
