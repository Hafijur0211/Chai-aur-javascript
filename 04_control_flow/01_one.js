// if
const isUserloggedIn = true;
const temperature = 41;

// if (2 === "2") {
//   console.log("executed");
// }

// if (2 != 3) {
//   console.log("executed");
// }

// if (temperature < 50) {
//   console.log("less than 50");
// }

// if else

// if (temperature === 41) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// console.log("executed");
// <,>, <=, >=, ==, !=, ===, !==

// Javascript scope

const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// shorthand notation

const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2")

// if, else if, else

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 900")
// } else{
//     console.log("less than 1200")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}
