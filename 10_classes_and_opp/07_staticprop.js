class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const hafijur = new User("hafijur");
// console.log(hafijur.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone02@gmail.com");
iphone.logMe()
// console.log(iphone.createId());
