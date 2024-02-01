// let myName = "hafijur   ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hafijur = function(){
    console.log(`hafijur is present in all objects`)
}

Array.prototype.heyHafijur = function(){
    console.log(`Hafijur says hello`)
}

// heroPower.hafijur()
myHeros.hafijur()
myHeros.heyHafijur()
// heroPower.heyHafijur()

// inheritance

const User = {
    name:'hafijur',
    email:'hafijur02@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Rahman    "

String.prototype.trueLength = function(){
    console.log(`${this}`) 
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hafijur".trueLength()
"iceTea".trueLength()