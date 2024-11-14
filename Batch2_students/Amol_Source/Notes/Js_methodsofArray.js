// Math.max and Math.min = to fin out the Maximum andd min value of a give array
// syntax =
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 55, 88, 9, 99, 44, 55, 2587452, 256852, 0, 12585]

// let largestnumber = (Math.max(...array1))

// console.log(largestnumber) //2587452

// let Smallestnumber = (Math.min(...array1))
// console.log(Smallestnumber) //0


//2. map ------> used to iterate over every element in the array 
//syntax 
/**
 * let arraynew=oldarryname.map((el,index,arr)=>{
 * return el any operation to perform
 * })
 */
// let maparr = numArray.map((el, index, arr) => {
//     return el + 2
// })
// console.log(maparr) // [3, 4,  5,  6, 7,8, 9, 10, 11]
// let maparr2=numArray.map((el,index,arr)=>{
//   return el-1
// })
// console.log(maparr2) //[0, 1, 2, 3, 4,5, 6, 7, 8 ]

//3. reduce ------> used to get the collective sum in array (adddition and substraction)
// let   numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrsum= numArray2.reduce((el,index,arr)=>{
//     return el+index
//     })
//     console.log(arrsum)

//4.filter------> used to filter out each element in the array 
// let gr5=numArray1.filter((el,index,arr)=>{
//     return el>5
// })
// console.log(gr5) //[ 6, 7, 8, 9 ]

//5 . // Foreach==> used to go through all indexex but it cant be written in return
// namearray.forEach((el,index,arr)=>{
//     console.log( el.toUpperCase())
//   })

//6. every --> &&---> boolean type (true & false) just checck the coondtion and go through all the values if it is big or small
// let numArray1 = [ 1, 2, 3, 4, 5, 6, 7, 8,9]
// let checkever=numArray1.every((el,index,arr)=>{
//     return el>0
// })
// console.log(checkever)

// //7 . some--||boolean type (true & false) just check the coondtion and check  the values it is available or valid or not
// let checksome=numArray1.some((el,index,arr)=>{
//     return el>5
// })
// console.log(checksome)