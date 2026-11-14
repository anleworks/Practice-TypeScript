export {};
console.log("Practice Intersection Type");

type TUsername = string | number; //union type

type TStudent = {
  id: number;
  name: string;
};

type TCoder = {
  address: string;
  language: string;
};

type TProgammer = TStudent & TCoder;

const student: TProgammer = {
  id: 1,
  name: "bacarrat",
  address: "hanoi",
  language: "typescript",
};

console.log(student);
