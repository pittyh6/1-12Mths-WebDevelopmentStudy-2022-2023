function greet ($greeting){
    console.log($greeting);
}
greet(); //undefined -> error
greet('Hi baby'); //Hi baby
//with default parameter
function greet2 ($greeting = "Hello Hello!!!"){
    console.log($greeting);
}
greet2(); //Hello Hello!!! -> default parameter
greet2('Hi baby');//Hi baby



// Spread Operator
let args = [1,2,3];
let args2 = [4,5,6]
function test(){
    console.log(args);
}
function test2(){
    console.log(args + ',' +args2);
}
test(); 
test(...args);
test2(...args, ...args2);


/** Spread syntax (...) allows an iterable such as an array expression or string 
 * to be expanded in places where zero or more arguments (for function calls) or 
 * elements (for array literals) are expected, or an object expression 
 * to be expanded in places where zero or more key-value pairs 
 * (for object literals) are expected.
        function sum(x, y, z) {
        return x + y + z;
        }

        const numbers = [1, 2, 3];

        console.log(sum(...numbers));
        // expected output: 6
 */