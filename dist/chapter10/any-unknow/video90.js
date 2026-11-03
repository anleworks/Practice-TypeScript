"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Any vs Unknow");
//ANY
// function test(name: any) {}
let name = "hinhsunhi"; // Any giong JavaScript
name = 25;
name = true;
// Unknown
let name2 = "canhsatnhi";
if (typeof name2 === "string") {
    name2.toUpperCase();
}
