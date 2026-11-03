export {};

console.log("Type Annotation vs Type Inference");

//annotation : @Controller @Service // comment

// infer

const name: string = "hinhsunhi";
const age: number = 24;
const test: boolean = true;

let email = "hinhsunhi@gmail.com";
let age1 = 25;
let abc = false;

let score = [1, 2, 3];

const demo: any = "eren"; //hạn chế tối đa dùng any
const demo1: unknown = "bla bla";
