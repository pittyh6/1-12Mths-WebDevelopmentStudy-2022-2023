/*The Promise object represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value.*/

//Immediate Resolved
let myPromise = Promise.resolve('foo');
myPromise.then((res) => console.log(res));


let myPromise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 2000);
});
myPromise2.then((res) => {
    res += 3;
    console.log(res);
});


