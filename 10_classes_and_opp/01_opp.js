// Object literal

const user = {
    username: "hafijur",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    },
};

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// Constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new User("Hafijur", 12, true);
const userTwo = new User("Rahman", 12, false);

// console.log(userOne);
// console.log(userOne.username);

// console.log(userTwo);

console.log(userOne.constructor)