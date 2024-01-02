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

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 600, 800));

const user = {
  username : 'hafijur',
  price : 199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//   username: "rahman",
//   price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));