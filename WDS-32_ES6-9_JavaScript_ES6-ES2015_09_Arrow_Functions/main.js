function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    let that = this;
    return arr.map(function(x){
        console.log(that.prefix + x);
    });
}
let pre = new Prefixer('Hello ');
pre.prefixArray(['Pitty', 'Pumba']);

// Arrow Function
function Prefixer2(prefix2){
    this.prefix2 = prefix2;
}

Prefixer2.prototype.prefixArray2 = function(arr){
    return arr.map((x) => {
        console.log(this.prefix2 + x);
    });
}
let pre2 = new Prefixer2('Oieeee ');
pre2.prefixArray2(['Priscila', 'Carlos']);



//Simple sintax
let add = function(a,b){
    let sum = a+b;
    console.log(sum);
    return false;
}
add(2,3)

let add2 = (a,b) => {
    let sum = a+b;
    console.log(sum);
    return false;
}
add2(2,3)
add2(2,32)