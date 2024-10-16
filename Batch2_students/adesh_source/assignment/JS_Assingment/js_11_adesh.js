
//  1) Find the largest and the smallest number from the array.

let str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 55, 88, 9, 99, 44, 55, 2587452, 256852, 0, 12585];
let largevalue = str[0];
let smallvalue = str[0];
for (let i = 1; i < str.length; i++) {
    if (str[i] > largevalue) {
        largevalue = str[i];
    }
    if (str[i] < smallvalue) {
        smallvalue= str[i];
    }
}
console.log(largevalue); 
console.log(smallvalue); 

 //2) Convert all elements of the following array to uppercase.
 let array = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol'];
 let Array1 = [];
 for (let i = 0; i < array.length; i++) {
     Array1[i] = array[i].toUpperCase();
 }
 console.log(Array1);

 // 3) Add 2 to each element of the array.
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < numArray.length; i++) {
      numArray[i] += 2;
  }
  console.log(numArray);

 //4) Find the sum of all elements in the array.
  // numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;
  for (let i = 0; i < numArray1.length; i++) {
      sum += numArray1[i];
  }
  
  console.log(sum);
// 5) Get all values in the array that are greater than 5.
let numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let greaterThan5 =[]

for(let i=0;i<numArray1.length;i++){
  if(numArray2[i]>5){
greaterThan5.push(numArray1[i])
  }
}
console.log(greaterThan5)
 //6) Provide 4 examples of array methods that were taught, along with their explanations.
 //push
 let ar=[1,2,3,4,5,];
ar.push(6);
console.log(ar);

//pop =remove last elemen
let ar2=[1,2,3,4,5,];
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
