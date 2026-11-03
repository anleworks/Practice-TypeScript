export {};

console.log("Object Type");

//optinal
const sv1: {
  name: string;
  id: number;
  phone?: number;
} = {
  name: "an",
  id: 321,
};

const sv2: {
  name: string;
  id: number;
  phone?: number;
} = {
  name: "truong",
  id: 131,
  phone: 9131,
};

const person: {
  name: string;
  age: number;
  address: string;
  isHandsome: boolean;
} = {
  name: "hinhsunhi",
  age: 25,
  address: "hanoi",
  isHandsome: true,
};

const printInfor = (people: {
  name: string;
  age: number;
  address: string;
  isHandsome: boolean;
}) => {
  console.log("Your name: ", people.name);
};

printInfor(person);
