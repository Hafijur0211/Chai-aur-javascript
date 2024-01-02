function sayMyName() {
  console.log("H");
  console.log("A");
  console.log("F");
  console.log("I");
  console.log("J");
  console.log("U");
  console.log("R");
}

// sayMyName();

// function addTwoNumbers(numbers1, numbers2){
//     console.log(numbers1 + numbers2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(1, 2);
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Hafijur"));
// console.log(loginUserMessage("Hafijur"));


