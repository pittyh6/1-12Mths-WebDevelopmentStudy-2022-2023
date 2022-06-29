/*ES6 introduced a new way of working with functions and iterators in the form of Generators
 (or generator functions). A generator is a function that can stop midway 
 and then continue from where it stopped. 
 In short, a generator appears to be a function but it behaves like an iterator.*/


 function *g1(){
    console.log("Hello!!!");
    yield 'Yield 1 Ran..';
    console.log("world");
    yield 'Yield 2 ran'
    return 'Returned';
 }
 //g1(); // it NOT work
 let g = g1();
 console.log(g.next()); //first time
 console.log(g.next().value);//second time
 console.log(g.next());//third time


 //for of loop
 function *g2(){
    console.log("Oieeee!!!");
    yield 'Yield 1 Ran..';
    console.log("world");
    yield 'Yield 2 ran'
    return 'Returned';
 }
 let gL = g2();
 for(let val of gL){
    console.log(val)
 }