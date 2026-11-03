export {};

console.log("Union Type");

//union
let username: string | number = "hinhsunhi@gmail.com";

username = 210123;
username = "012314113";

const printUsername = (username: string | number) => {
  if (typeof username === "string") {
    console.log("My username:", username.toUpperCase());
  }
};

printUsername("vuavanhdai");
