export {};
console.log("Function TS");

const sayHi = (name: string) => {
  console.log("say hi .....", name, "!!");
};

sayHi("hinhsunhi");

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(8, 11));
