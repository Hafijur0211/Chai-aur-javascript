// ES6

/*

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword() {
        return `${this.password}abc`;
    }
    chnageUserName() {
        return `${this.username.toUpperCase()}`;
    }
}

const hafijur = new User("hafijur", "hafijur02@gmail.com", "123");

console.log(hafijur.encryptedPassword());
console.log(hafijur.changeUserName());

*/

// Behind the Scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function () {
    return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
};

const rahman = new User("rahman", "rahman02@gmail.com", "123");

console.log(rahman.encryptedPassword());
console.log(rahman.changeUserName());
