class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}hafijur`;
    }

    set password(value) {
        // this._password = value.toUpperCase()
        this._password = value;
    }
}

const hafijur = new User("hafijur02@gmail.com", "abc");
console.log(hafijur.email);
console.log(hafijur.password);
