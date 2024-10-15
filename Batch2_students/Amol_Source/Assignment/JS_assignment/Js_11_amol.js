
//  * 1) Find the largest and the smallest number from the array.
// let str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 55, 88, 9, 99, 44, 55, 2587452, 256852, 0, 12585,]
// let small = 0
// for(i=0;i<=str.length-1;i++){
//     if(str[i]>=small){
//         small = str[i]
//     }   
// }
// console.log("largest number",small)

// for(i=0;i<=str.length-1;i++){
//     if(str[i]<=small){
//         small = str[i]
//     }   
// }
// console.log("Smallest Number",small)

//  *
// //  * 2) Convert all elements of the following array to uppercase.
//array = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol']

// let array1 =array.length
// for(i=0;i<=array1-1;i++){
//     console.log(array[i].toUpperCase())
// }
// array = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol']
// for(i=0;i<array.length;i++){
//     array[i]=array[i].toUpperCase()
// }
// console.log(array)

// // * 3) Add 2 to each element of the array.
//    numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//    for(i=0;i<=numArray.length-1;i++){
//    numArray[i]= numArray[i]+2
// }
// console.log(numArray)
   
//  *
//  * 4) Find the sum of all elements in the array.
//  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  let num =0
//  for (i=0;i<=numArray.length-1;i++){
//    num += numArray[i]
//  }
//  console.log(num)

//  * 5) Get all values in the array that are greater than 5.
// numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numArray1 = [];
// for(i=0;i<=numArray.length-1;i++){
//     if(numArray[i]>5){
//         numArray1.push(numArray[i])  
//     }
// }
// console.log(numArray1) 

//method 2
// numArray.splice(0,4)
// console.log(numArray)
//***** from Pratik****
// 1. Write a code to reverse a given array without using reverse function
// Eg. Given 
// let array =[2, 5, 7, 1]
// let array1 =""
// for(i=array.length-1;i>=0;i--){
//     array1 += array[i]
// }
// console.log(array1.split(""))

// 2. Write a code to find out whether the given element is present in the given sorted array or not.
// Eg. Given array [1, 2, 4 , 7, 15, 22, 25] given element 22.
// Expected output:True
// Explanation :
// as 22 is present in a given array print true. 
// let element = 22
// let array1=[1, 2, 4 , 7, 15, 22, 25]
// for(i=0;i<=array1.length;i++)
// if(array1[i]===element){
//     console.log(array1[i]===element)
//     console.log(`${element} is present in a given array`)  
// }
// let element = 22
// let array1=[1, 2, 4 , 7, 15, 22, 25]
// let check= array1.includes(element)
// if(check ===true){
//     console.log(`${element} is present in a given array is ${check}`)
// }
// 3. In case of given element as 8 output should be false because 8 is not in given array
// let element = 8
// let array1=[1, 2, 4 , 7, 15, 22, 25]
// for(i=0;i<=array1.length;i++){
// if(array1[i]===element){
//     console.log(`${element} is present in given array`)  
//      }  
// }
// console.log(array1[i]===element)
// console.log(`${element} is not present in given array`) 


//  * 6) Provide 4 examples of array methods that were taught, along with their explanations.
//let str1 = "hello I am learning JavaScript and currently I am seeing the topic loops";
// console.log(str1[0]); 
// console.log(str1[16])
// console.log(str1[23])
// console.log(str1[str1.length - 1])

// 2. Update any value in the array:
//let ar = ["Amol", 24, "kantilal", "jadhav", 9767004310, true];
// ar[0]='AMOL';
// ar[1] = "twenty Four"
// ar[2] = "KANTILAL"
// ar[ar.length-1] = "false"
// console.log(ar)
//  //3. Delete a value from the array:
// delete ar[0]
// delete ar[1]
// delete ar[2]
// delete ar[ar.length-1]
// console.log(ar)
// 4. Add a value to the array: unsift - method use to add value at starting
// ar.unshift("introduce")
// ar.unshift("afternoon")
// ar.unshift("Good")
// ar.unshift("hello")
// console.log(ar)
//5. Method: push() -> Adds a value at the end of the array
// let ard = ["Amol", 24, "kantilal", "jadhav", 9767004310, true];
// ard.push("check1")
// ard.push("check2")
// ard.push("check3")
// ard.push("check4")
// console.log(ard)
//6.  Method: pop() -> Removes the last value in the array
// let ard1 = ["Amol", 24, "kantilal", "jadhav", 9767004310, true]
// ard1.pop()//delete last value
// ard1.pop()// delet second last value
// ard1.pop()
// ard1.pop()
// console.log(ard1)
//7. Method: shift() -> Removes the first value in the array
// let ard2 = ["Amol", 24, "kantilal", "jadhav", 9767004310, true]
// ard2.shift()
// ard2.shift()
// ard2.shift()
// ard2.shift()
// console.log(ard2)
//8. Method1: splice() -> Used to add or remove a value at any index of the array
//****(syntax=== declaring indexnumber, delete index, value for declare indexnumber) here we create new value with mention index.. means we create indexnumber also as per declare and as per declare indexnumber we store that value at that index number******
// let ard2 = ["Amol", 24, "kantilal", "jadhav", 9767004310, true]
// ard2.splice(0,0,'firstName')// continueous looping thats why index numbers goes on increasing
// console.log(ard2)
// ard2.splice(3,0,"fatherName")
// console.log(ard2)
// ard2.splice(5,0,"sirName")
// console.log(ard2)
// ard2.splice(7,0,"contactnumber")
// console.log(ard2)
// 9. Method2: splice() Removing elements from index (staring number, Last index not inclusive):
//let ard3 = ["Amol", 24, "kantilal", "jadhav", 9767004310, true]
// ard3.splice(1,1)
// console.log(ard3)//[ 'Amol', 'kantilal', 'jadhav', 9767004310, true ]
// ard3.splice(4,5)
// console.log(ard3)//[ 'Amol', 24, 'kantilal', 'jadhav' ]
//ard3.splice(1,4)
//console.log(ard3) //[ 'Amol', true ]
// ard3.splice(0,2)
// console.log(ard3)//[ 'kantilal', 'jadhav', 9767004310, true ]
//10 Method: join() -> Converts an array into a string
// let ard4 = ["Amol", 24, "kantilal", "jadhav", 9767004310, true]
// let dd= ard4.join(" ")
// console.log(dd)
// let cc= ard4.join("##")
// console.log(cc)
// let bb =ard4.join("**")
// console.log(bb)
// let aa = ard4.join("->")
// console.log(aa)
//11. Method: sort(); Sort array alphabetically:
// let Str = ["a","c","s","d","f","g","h","j","k","l","e","r"]
// let Str1 = Str.sort()
// console.log(Str1)
// let num = [2,3,5,6,7,8,9,10,13,24,56,78,90,12,17,15,34]
// let num1 = num.sort((a,b)=> a-b)
// console.log(num1)
// let mix = [1111,"AAAA","aaaa","####"]
// let mix1 = mix.sort()
// console.log(mix1)//[ '####', 1111, 'AAAA', 'aaaa' ]
// let str1 = ["amol",1234,"%$^#&","amol@123","AMHDHGJ"]
// let str2 = str1.sort()
// console.log(str2)//[ '%$^#&', 1234, 'AMHDHGJ', 'amol', 'amol@123' ]
//12.method:reverse() Reverse an array:
// let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(num.reverse())
// let char= [ "a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// console.log(char.reverse())
// let strz = ["i","am","learning","javascript","from",9]
// console.log(strz.reverse())
// let change = ['nitin',"racecaR"]
// console.log(change.reverse())
// let chnage2 = ["Racecar"]
// // console.log(chnage2.reverse())// im not getting revserse
// let aa = String(chnage2).split("").reverse().join('')
// console.log(aa) // here i want use this method string-split by''-reverse()-join''
// 13. method : Includes(_) check the value is present in a arrya or not
// let arra = ["Siddhant", "Vaibhav", "Amol", "Athrava", "Shrinivas", "Sneha"];
// console.log(arra.includes("Amol"))
// console.log(arra.includes("amol"))
// console.log(arra.includes("Athrava"))
// console.log(arra.includes("athrava"))
// 14. method : Concatenate arrays - to add multiple string
// let name = ["Amol"]
// let middlename = ["kantilal"]
// let lastname = ["Jadhav"]
// let age = [24]
// let city=['Sangamner']
// console.log(name.concat(middlename,lastname))
// console.log(name.concat(age,city))
// console.log(city.concat(name,age))
// console.log(name.concat(middlename,lastname,age,city))
// 16. Method: Flat()- Flatten an array of arrays
// let arra = [1,2,3,4,5,["amol"],["kantilal"],['jadhav'],['amol@1234']]
// console.log(arra.flat())