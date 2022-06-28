var a = 'test 1'
let b = "test 2"

console.log(`a: ${a}`)
console.log(`b: ${b}`)

function testVar(){
    console.log("testVar")
    var a = 30; // global variable
    if(true){
        var a = 50; // local variable, change the global variable value
        console.log(a);
    }
    console.log(a)
}
testVar();

function testLet(){
    console.log("testLet")
    let a = 30; // global variable
    if(true){
        let a = 50; // local variable, NOT change the global variable value
        console.log(a)
    }
    console.log(a)
}
testLet();

for(var i = 0; i < 10; i++){
    console.log('loop with var')
    console.log(i)
}
console.log(i) // shows the last increment of i

for(let u = 0; u < 10; u++){
    console.log('loop with let')
    console.log(u);
}
    console.log(u); // does not work because it is not in the same level(inside the for loop)