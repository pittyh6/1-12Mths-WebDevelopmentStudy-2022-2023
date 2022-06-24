// ---- console ---- //
console.log("hi baby")
console.error("this is a hugeeeeee error.")
console.warn("this is a warning")
// ------------------------------------------------//


// ---- variables ---- //
let ageLet = 30;
ageLet = 31
console.log(ageLet)

const ageConst = 29;
//ageConst = 30 //CAN'T DO THIS
console.log(ageConst)
//USE CONST UNLESS YOU KNOW THAT THE VALUE OF THE VARIABLE IS GOING TO CHANGE, SO YOU USE LET. 
// ------------------------------------------------//


// ---- data_types ---- //
// String, numbers, booleans, null, undefined
let name = 'Priscila'; //string
let age = 33; //number
const rating = 4.5; //doble, decimal is = number
const isCool = true; //boolean
const x = null; //null
const y = undefined; //undefined
let z;

// test the type of variables
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
// ------------------------------------------------//


// ---- concatenation---- //
//old way with ""
console.log("My name is " + name + " and I am " + age )
//New way with `` ES6
console.log(`My name is ${name} and I am ${age}`)
// ------------------------------------------------//


// ---- String properties and methods---- //
const s = "hello world!";
const p = "technology, it, computers, mac, code, web"
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,7).toUpperCase())
console.log(s.split(' '))
console.log(s.split(''))
console.log(p.split(', '))
// ------------------------------------------------//


// ---- Arrays ---- //
// Arrays - variables that hold multiple values
//constructor array 
const number = new Array(1,2,3,4,5)
console.log(number)
//array 
const fruits = ['apple','orange','grape']
console.log(fruits)
// multi datas
const free = ['house', 10, 'black horse', true, 4.5, null]
console.log(free)

// select in specific possition array
console.log(free[2])

//ADD values to the arrays
//last possition
free[free.length] = 'last'
console.log(free)
free.push("alwaysLast")
console.log(free)
//last first
free[0] = 'first' //this one changes de first one... delete the previous and add the new one
console.log(free)
free.unshift('now add first')
console.log(free)

//REMOVE last value from array
free.pop()

//verify if is an arrays
console.log(Array.isArray('last'))
console.log(Array.isArray(free))

//to know the index
console.log(free.indexOf('black horse'))
// ------------------------------------------------//


// ----Object Literals  ---- //
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34,
    hobbies: ['music', 'yoga', 'kdrama'],
    address: {
        street: '50 main ave',
        city: 'San Francisco',
        state: 'CA'
    }
}

console.log(person)
console.log(person.firstName)
console.log(person.firstName, person.lastName, person.age)
console.log(person.hobbies[1])
console.log(person.address.city)

//Get the data from an object and save it in a variable
const {firstName, lastName, address:{city}} = person
console.log(firstName)
console.log(city)

//add information about the person object
person.email = 'blabla@gmail.com'
console.log(person)
// ------------------------------------------------//


// ---- Arrays Of Objects & JSON ---- //
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isComplete: false
    },
];
console.log(todos)
console.log(todos[2])
console.log(todos[2].id)
console.log(todos[1].text)

//JSON converter
const todoJson = JSON.stringify(todos)
console.log(todoJson)
console.log(todoJson[2])

// ------------------------------------------------//


// ---- Loops ---- //
for(let i = 0; i < 5; i++){
    console.log(`for loop number: ${i}`);
}

for(let i = 0; i < todos.length; i++){
    console.log(`array  loop number: ${todos[i].text}`);
}

for(let todo of todos){
    console.log(todo);
    console.log(todo.id);
    console.log(todo.text);
}

let i = 0
while(i<5){
    console.log(`while loop number: ${i}`);
    i++;
}
// ------------------------------------------------//


// ---- High Order Array Methods ---- //
// ------------------------------------------------//


// ---- ---- //
// ------------------------------------------------//


// ---- ---- //
// ------------------------------------------------//


// ---- ---- //
// ------------------------------------------------//
