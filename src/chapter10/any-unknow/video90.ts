export {};
console.log("Any vs Unknow");

//ANY
// function test(name: any) {}
let name: any = "hinhsunhi"; // Any giong JavaScript

name = 25;
name = true;

// Unknown
let name2: unknown = "canhsatnhi";
if (typeof name2 === "string") {
  name2.toUpperCase();
}
