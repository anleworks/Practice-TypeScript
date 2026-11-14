export {};

console.log("Practice Interface");

interface IStudent {
  name: string;
  age: number;
  address?: string; //optinal
  readonly languagues: string;
  sayHi: () => void;
}

const sv1: IStudent = {
  name: "tr",
  age: 24,
  address: "hanoi",
  languagues: "vn",
  sayHi: () => {
    console.log("i'm student");
  },
};
