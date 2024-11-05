/**
 * 
 * //1  get me the largest number and the smallest number form the array 
 * array=[1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585]
 * 


//2  convert this array into uppcase 
array=
[ 'vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol' ]

//3 add 2 in every element of this array 
numaarry=[1,2,3,4,5,6,7,8,9]

//4 get the me sum of this array 

numaarry=[1,2,3,4,5,6,7,8,9]

//5 get me all the value in this array above 5

numaarry=[1,2,3,4,5,6,7,8,9]

//6 --- give me 4 examples of every method taught of array .
* 
 * 
 * 
 * 
 * 
 * 
 */ 
  
////////////////////////---------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//get me the largest number and the smallest number form the array 
// array=[1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585]

let ARRAY = [1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585];
let SmallestNumber = 0;
for(let i=0; i>=ARRAY.length; i++){
    if(ARRAY[i]>= SmallestNumber){
       SmallestNumber = ARRAY[i];
    }
}
console.log("the smallest number is", SmallestNumber); // 

let ARRAY1 = [1,2,3,4,5,6,7,8,9,11,22,55,88,9,99,44,55,2587452,256852,0,12585];
let LargestNumber = 0;
for (let i =0; i<=ARRAY1.length; i++){
    if(ARRAY1[i]>=LargestNumber){
        LargestNumber = ARRAY1[i];
    }
}
console.log("the LargestNumber is",LargestNumber);

console.log("-----------------1----------------------")


// Q2 .   convert this array into uppcase array= [ 'vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol' ]

let  Ary = [ 'vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol' ];
for (let i = 0; i<Ary.length; i++){
    Ary[i] = Ary[i].toUpperCase();
}
console.log(Ary); // ['VAIBHAV','SNEHA','SIDDHANT','SHRINI']
console.log("--------------2----------------------");
 

// //Q3/  add 2 in every element of this array  numaarry=[1,2,3,4,5,6,7,8,9] 

let numarray = [1,2,3,4,5,6,7,8,9];
let numbertoadd = 2
for (let i = 0; i<numarray.length; i++){
    numarray[i] +=  numbertoadd;
}
    
console.log(numarray); //[3,4,5,6,7,8,9,10,11]
console.log("-----------------3----------------------");


//Q4. get the me sum of this array 

let NumArray=[1,2,3,4,5,6,7,8,9];
let sum = 0;
for (let i = 0; i<NumArray.length; i++){
    sum += NumArray[i];
}
console.log(sum); // 45
console.log("-----------------4----------------------");

//Q.5  get me all the value in this array above 5
let NumArraY=[1,2,3,4,5,6,7,8,9];
let newArr = [];
for (let i = 0; i<NumArraY.length; i++){
    if (NumArraY[i] > 5) {
        newArr.push(NumArraY[i]);
    }
} 
console.log(newArr); // [6,7,8,9] 
console.log("-----------------5----------------------");


//Q6. give me 4 examples of every method taught of array 
//1.  push() method
let arr = [1,2,3,4,5];
console.log(arr.push(6)); 
console.log(arr); // 6

let rut = [8,9,10,11];
console.log(rut.push(12)); 
console.log(rut); // 12

let uyu = [20,30,40,50,60];
console.log(uyu.push(70,80,90));
console.log(uyu); /*[
    20, 30, 40, 50,
    60, 70, 80, 90
  ] */

let poi = [13,15,17,19];
console.log(poi.push(21));
console.log(poi); // 21 
//////////////\\\\\\\\\

//2 . pop() method
let ety = [2,4,6,8,20];
ety.pop();
console.log(ety);

let tey = [9,10,11,12];
tey.pop();
console.log(tey);

let jlk = [7,0,8,0];
jlk.pop();
console.log(jlk);  

let lpl = [11,22,33,44,55];
lpl.pop();
console.log(lpl);  // [11,22,33,44]

////////////\\\\\\\\\ 

//3 . unshift() method
let opo = ['this','is','atharva'];
opo.unshift('hola');
console.log(opo);

let oop = ['code','is','a','batch'];
oop.unshift('source');
console.log(oop);

let PoP = ['are','qwerty','shortcuts'];
PoP.unshift('these');
console.log(PoP); 

let Loc = ['2','3','4','5','6'];
Loc.unshift('1');
console.log(Loc); 

//4 SPLICE()
let kkk = ['a','b','c','d'];
kkk.splice(3);
console.log(kkk); 

let oiy = [0,9,7,6,5];
oiy.splice(0,2);
console.log(oiy);

let lio = [7,7,8,8,9];
lio.splice(0,3);
console.log(lio);

let hjh = [5,10,15,20,25];
hjh.splice(1,4);
console.log(hjh)

///////////////\\\\\\\\\\\\\\\\\\

//4 join('-->')
let ikt = ["this","is","the","main"];
let att = ikt.join('-->');
console.log(att);

let ioj = ["atharva","vijay","pandit"];
let joi = ioj.join('-->');
console.log(joi); 


// console.log("-----------------6----------------------")


// PRATIk's Questions : 

// 1. Write a code to reverse a given array without using reverse function
// Eg. Given array [2, 5, 7, 1]
// Expected output [1, 7, 5, 2]

// 2. Write a code to find out whether the given element is present in the given sorted array or not.
// Eg. Given array [1, 2, 4 , 7, 15, 22, 25] given element 22.
// Expected output:True
// Explanation :
// as 22 is present in a given array print true. 

// In case of given element as 8 output should be false because 8 is not in given array 

//Q.1 
 let Arr = [2,5,7,1];
 let Arr1 = [];
 for(let i  = Arr.length-1; i>=0; i--){
    Arr1.push(Arr[i]);
    console.log(Arr1);
 }





//Q.2.
let Arr2 = [1, 2, 4 , 7, 15, 22, 25];




let ib = "americans call roti as the tortilla and they  call the naan as the pita";

let vowels ="aeiou";
let count = 0;
let bt = "";
for(let i = 0; i < ib.length; i++){
    if(vowels.includes(ib[i])){
        bt += ib[i];
        count++
    }
}
console.log(`the number of vowels are : ${bt} and the count is ${count}`);

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let padDayFormat = String(day).padStart(2,'0');
let padMonthFormat = String(month).padStart(2,'0');
console.log(`${padDayFormat}/${padMonthFormat}/${year}`);

let ujh = ['america','finland','germany','berlin','istria','china','australia','hannouver'];
//ujh.splice(3,0,'uganda');
//console.log(ujh);

// ujh.splice(1,4);
// console.log(ujh);

let inm = ['atharva','amruta','rajshri','vijay','ramchand','ahilya'];
let uit = inm.slice(1,4);
console.log(uit);