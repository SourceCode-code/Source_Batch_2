//Array: array can store multiple value in single variable.

// push() add element to the end.

let ar=[1,2,3,4,5,];
ar.push(6);
console.log(ar);

//pop =remove last element.
let array=[1,2,3,4,5,];
array.pop();
console.log(array);


//shift remove first element.
let adesh=["red","green","blue","yellow"];
adesh.shift();
console.log(adesh);

//unshift add element to begginings.

let avd=["red","green","blue","yellow"];
avd.unshift("white");
console.log(avd);

// splice
//        1       2         3       5
//       0        1         2       3  

let lmn=[1,2,3,5,6];
lmn.splice(3,0,4);
console.log(lmn);
