export {};

console.log("Type Aliases");

type TStudent = {
  id: string;
  name: string;
  address: string;
  age: number;
};

const student1: TStudent = {
  id: "sv1",
  name: "anlee",
  address: "hanoi",
  age: 25,
};

const student2: TStudent = {
  id: "sv2",
  name: "truong",
  address: "vinhphuc",
  age: 25,
};

const printInfo = (st: TStudent) => {
  console.log("student name : ", st.name);
};

printInfo(student1);
printInfo(student2);
