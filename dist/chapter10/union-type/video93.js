"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Union Type");
//union
let username = "hinhsunhi@gmail.com";
username = 210123;
username = "012314113";
const printUsername = (username) => {
    if (typeof username === "string") {
        console.log("My username:", username.toUpperCase());
    }
};
printUsername("vuavanhdai");
