class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added to ${this.username}`);
    }
}

const hafijur = new Teacher("hafijur", "hafijur02@gmail.com", "123")

hafijur.logMe()
const rahman = new User("rahman")

rahman.logMe()

// console.log(hafijur === Teacher)
console.log(hafijur instanceof Teacher)
console.log(hafijur instanceof User)

