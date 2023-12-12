// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 11, 12);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 11, 12, 8, 27);
// let myCreatedDate = new Date("2023-11-14");
let myCreatedDate = new Date("01-12-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long"
})