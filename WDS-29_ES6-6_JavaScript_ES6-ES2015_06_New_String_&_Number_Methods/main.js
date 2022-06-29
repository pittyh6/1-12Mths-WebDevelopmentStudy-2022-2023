
let theString = 'Hello, I am Pitty and I love javaScript';

console.log(theString.startsWith("Hello")); //true
console.log(theString.startsWith("hello")); //false
console.log(theString.startsWith("H")); //true

console.log(theString.endsWith("javaScript")); //true
console.log(theString.endsWith("javaScripts")); //false

console.log(theString.includes("Pitty"));//true
console.log(theString.includes("pitty"));//false

//HEX
console.log(0xFF)
//Binary
console.log(0b101011)
//Octal
console.log(0o543)


//isFinite
console.log(Number.isFinite(8))//true
console.log(Number.isFinite(NaN))//false

//isNaN
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(5))//false

//isInteger
console.log(Number.isInteger(-5))//true
console.log(Number.isInteger('pitty'))//false