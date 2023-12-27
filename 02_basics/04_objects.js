// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "some@gamil.com",
    fullName: {
        userFullName: {
            firstName: "Hafijur",
            lastName: "Rahman",
        },
    },
};

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: 'ha@gmail.com',
    },
    {
        id: 1,
        email: 'ha@gmail.com',
    },
    {
        id: 1,
        email: 'ha@gmail.com',
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    courseName : 'Js in hindi',
    price : '999',
    courseInstructor: 'Hitesh'
}

// course.courseName

const {courseInstructor: instructor} = course

console.log(courseInstructor)
console.log(instructor)

// {
//     'name': 'hitesh',
//     'coursename': 'js in hindi',
//     'price': 'free',
// }

[
    {},
    {},
    {}
]