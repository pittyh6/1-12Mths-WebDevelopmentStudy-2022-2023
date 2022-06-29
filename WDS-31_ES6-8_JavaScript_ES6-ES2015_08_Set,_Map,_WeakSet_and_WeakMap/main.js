//SET
let myArray = [11,22,34,56,7];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b:2});
mySet.delete('100');
mySet.clear();
mySet.add('100');
mySet.add({a: 1, b:2});
mySet.add(11);

console.log(mySet);
console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
})

//MAP//
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
*/
let myMap = new Map([['a1','hello'], ['a2','world']]);
myMap.set('c3', 'bye world');
myMap.delete('a1')
console.log(myMap);
console.log(myMap.size);

//WeakSet
/*The WeakSet object lets you store weakly held objects in a collection.
Description
WeakSet objects are collections of objects. Just as with Sets, 
each object in a WeakSet may occur only once; all objects in a WeakSet's collection are unique.
*/

let carWeakSet = new WeakSet();
console.log(carWeakSet);

let car1 = {
    make: 'Honda',
    model: 'Civic'
}
let car2 = {
    make: 'Fiat',
    model: 'Uno'
}
carWeakSet.add(car1);
carWeakSet.add(car2);
carWeakSet.delete(car1);

console.log(carWeakSet);


//WEAKMAP
/*A WeakMap is a collection of key/value pairs whose keys must be objects, 
with values of any arbitrary JavaScript type, and which does not create strong references 
to its keys. That is, an object's presence as a key in a WeakMap does not prevent the object from 
being garbage collected. Once an object used as a key has been collected, 
its corresponding values in any WeakMap become candidates for garbage collection as well — 
as long as they aren't strongly referred to elsewhere.*/

let carWeakMap = new WeakMap();
let key1 = {
    id: 1
}
let car3 = {
    make: 'Honda',
    model: 'Civic'
}
let key2 = {
    id: 2
}
let car4 = {
    make: 'Fiat',
    model: 'Uno'
}
carWeakMap.set(key1, car3);
carWeakMap.set(key2, car4);

carWeakMap.delete(key1);
console.log(carWeakMap);