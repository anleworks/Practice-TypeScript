export {};

console.log("Practice Type Assertions TS");

const btnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("name") as HTMLInputElement;

btnElement?.addEventListener("click", () => {
  alert(inputElement!.value);
});
