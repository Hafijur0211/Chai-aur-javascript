// var c = 300
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hafijur";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website)

  two();
}

// one()

if (true) {
  const username = "hafijur";
  if (username === "hafijur") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website)
}

// console.log(username);


// +++++++++++++++++++++  Interesting   ++++++++++++++++++++++++++++

console.log(addOne(5))

function  addOne(num){
  return num + 1
}




const addTwo = function(num){
  return num + 2
}

addTwo(5)