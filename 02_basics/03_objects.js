//  singleton
// object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hafijur",
  "full name": "Hafijur Rahman",
  mySym: "mykey1",
  age: 23,
  location: "lalpania",
  email: "hafijur@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hafijur0211@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hafijur1998@gmail.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())