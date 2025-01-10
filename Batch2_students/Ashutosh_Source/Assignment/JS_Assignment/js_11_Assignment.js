//  * 1) Find the largest and the smallest number from the array.
Aarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 55, 88, 9, 99, 44, 55, 2587452, 256852, 0, 12585]
Aarray.sort((a,b) => a - b)
console.log(Aarray);
console.log(Aarray[0]);// smallest number
console.log(Aarray[Aarray.length - 1]); //largest number

//  *
//  * 2) Convert all elements of the following array to uppercase.
Barray = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol']
// Method1
console.log(String(Barray).toUpperCase());//first convert the array to string and apply thr toUppercase
//Method 2
zz = Barray.join(">")
console.log(zz.toUpperCase().split(">"));

//  * 3) Add 2 to each element of the array.
numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
addValue = 2
for(let i=0;i<=numArray.length-1;i++){
    numArray[i]+=addValue
}
console.log(numArray);

//  * 4) Find the sum of all elements in the array.
numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumArr = 0
for(let i=0;i<=numArray1.length-1;i++){
    sumArr+=numArray1[i]
}
console.log(sumArr);

//  * 5) Get all values in the array that are greater than 5.
numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
greterThan5 = []
for(let i=0;i<=numArray2.length-1;i++){
    if(numArray2[i] > 5){
        greterThan5.push(numArray2[i])
    }
}
console.log(greterThan5);

//  * 6) Provide 4 examples of array methods that were taught, along with their explanations.
//1.Length
console.log(numArray2.length);
//2.push - to add the element at last to arrey 
numArray2.push(10)
console.log(numArray2);
//3.Sort() - to sort the element alphabeticaly
Barray = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol']
console.log(Barray.sort());
//4.join - to convert arrey into string
console.log(Barray.join("-"));
//5.concat - to Concatenat multiple arrey arreys
A = [1,2,3,4]
B = [5,6,7]
C = [8,9,10]
console.log(A.concat(B,C));