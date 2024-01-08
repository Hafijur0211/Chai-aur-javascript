const user = {
  username: "Hafijur",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this)
  },
};

// user.welcomeMessage()
// user.username = 'Hafij'
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = 'Hafijur'
//     console.log(this.username)
// }

// one()

// const one = function(){
//     let username = 'hafijur'
//     console.log(this.username)
// }

const one = () => {
  let username = "hafijur";
  console.log(this);
};

// one();

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({username:'Hafijur'})

console.log(addTwo(3, 4));

// const myArray = [2,4,6,7,8]

// myArray.forEach()
