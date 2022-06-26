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
todos.forEach(function(todo){
    console.log(todo)
    console.log(todo.text)
})

const todoMapId = todos.map(function(todo){
    return todo.id
})
console.log(todoMapId)
console.log(todoMapId[1])

const todoFilterIsCompletedTrue = todos.filter(function(todoTrue){
    return todoTrue.isComplete == true;
})
console.log(todoFilterIsCompletedTrue);

const todoFilterAndMap = todos.filter(function(todoFilterMap){
    return todoFilterMap.isComplete == true;
}).map(function(todo){
    return todo.text;
})
console.log(todoFilterAndMap);

// ------------------------------------------------//


// ---- Conditionals ---- //
const xN = 99;
if(xN == 10) {
    console.log(`x is 10`)
}else if(xN > 10) {
    console.log(`x is ${xN}`)
}else if(xN > 10 && xN <= 100) {
    console.log(`x is ${xN}`)
}else{
    console.log(`x is not 10`)
}

//Conditional (ternary) operator
const a = 11;
const color = a > 10 ? 'red' : 'green';
console.log(color)

//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green')
        break;
    default:
        console.log('color is not red or green');
        break;
}
// ------------------------------------------------//


// ---- Functions ---- //
function addNum(n1 = 1, n2){
    return n1 + n2;
}
console.log(addNum())
console.log(addNum(10, 10))

// ------------------------------------------------//


// ---- Arrow functions ---- //
// for only 1 expressions do not need {} and you can not use return
const adNumArrow = (num1 = 1, num2 = 2) => num1 + num2;
console.log(adNumArrow())
console.log(adNumArrow(5, 9))

//to use return put the {}
const adNum = (num1 = 1, num2 = 4) => {
    return num1 + num2;
}
console.log(adNum())
console.log(adNum(5, 9))

//If you just have one parameter do not need use the ()
const addNumP = np1 => np1 * 5;
console.log(addNumP())
console.log(addNumP(0))
console.log(addNumP(5))

//with a loop forEach
todos.forEach((todo) => console.log(todo))
// ------------------------------------------------//


// ---- Constructor Functions ---- //
//constructor function
function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    //create functions 
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
//instantiate object
const person1 = new Person('Priscila', 'Bezerra', '2-3-1987')
const person2 = new Person('Carlos', 'Santos', '12-11-1973')
console.log(person1)
console.log(person1.firstName)
console.log(Person)
console.log(person2)
console.log(person2.dob)
console.log(person2.dob.getFullYear())

//return function
console.log(person1.getBirthYear())
console.log(person1.getFullName())
// ------------------------------------------------//


// ---- Prototypes ---- //
//constructor function
function PersonP (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

//PROTOTYPE 
PersonP.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
PersonP.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//instantiate object
const personP1 = new PersonP('Priscila', 'Bezerra', '2-3-1987')
const personP2 = new PersonP('Carlos', 'Santos', '12-11-1973')


console.log(personP1)
console.log(personP1.getBirthYear())
console.log(personP1.getFullName())
// ------------------------------------------------//


// ---- ES6 Classes ---- //
class Personc {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const personc1 = new Personc('Priscila', 'Bezerra', '2-3-1987');
const personc2 = new Personc('Carlos', 'Santos', '12-11-1973')

console.log(Personc)
console.log(personc1)
console.log(personc2)
console.log(personc2.getBirthYear())
// ------------------------------------------------//


// ---- Window Object & DOM ---- //
//window object
console.log(window);

//DOM
//single element
const singleEl = document.getElementById('my-form');
console.log(singleEl);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//multiple elements
console.log(document.querySelectorAll('input'));
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item')); //old

//loop through
const items = document.querySelectorAll('.item');
items.forEach(function(item){
    console.log(item)
});
items.forEach((item =>  console.log(item.innerHTML)));


//Manipulating The DOM 

// ------------------------------------------------//


// ---- ---- //
// ------------------------------------------------//


// ---- ---- //
// ------------------------------------------------//
