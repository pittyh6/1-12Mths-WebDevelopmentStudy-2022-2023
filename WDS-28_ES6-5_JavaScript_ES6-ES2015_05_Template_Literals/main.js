
//concatenation string '' + '' 
let templateConcatenation = '<h1>Hi there!!!</h1> ' + 
                '<p>This is a simple template.</p>';
document.querySelector('#templateConcat').innerHTML = templateConcatenation;


// Literal template ``
let templateLiteral = `<h1>Hi again!!!</h1> 
                        <p>This is a literal template.</p>`;
document.querySelector('#templateLiteral').innerHTML = templateLiteral


// Literal template with variable `..... ${variableName} ....`
let name = 'Priscila';
let templateLiteralVariable = `<h1>Hi, ${name}!!!</h1> 
                                <p>This is a literal template.</p>`;
document.querySelector('#templateLiteralVariable').innerHTML = templateLiteralVariable


// Literal template with function `..... ${functionName()} ....`
let nameBoy = 'Carlos';
function makeUpperCase(word){
    return word.toUpperCase();
}
let templateLiteralFunction = `<h1>${makeUpperCase('Hello')} hello, ${nameBoy}!!!</h1> 
                                <p>This is a literal template.</p>`;
document.querySelector('#templateLiteralVariable').innerHTML = templateLiteralFunction
