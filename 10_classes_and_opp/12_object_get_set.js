const User = {
    _email: "hafijur02@gmail.com",
    _password: "pqr",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const hafijur = Object.create(User)
console.log(hafijur.email)