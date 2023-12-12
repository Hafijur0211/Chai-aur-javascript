const name = "hafijur";
const repoCount = 50;

// console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hafijur-rahman");

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-13, 4);
console.log(anotherString);

const newStringONe = "    hafijur   ";
console.log(newStringONe);
console.log(newStringONe.trim());

const url = "https://hafijur.com//hafijur%20rahman";

console.log(url.replace("%20", "-"));

console.log(url.includes("hafijur"));

console.log(url.includes("hafizul"));

console.log(gameName.split('-'));