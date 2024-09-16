//Q.1 
let x = 7.2;
console.log(Math.round(x));

//it will round off to 7 

//Q.2. 
let gravity = 9.81;
console.log(typeof(gravity));

//number

//Q.3 
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// random numbers generated : 3,8,6,7,5

//Q.4 
let num = 5.7 ;
//console.log(Math.ceil(num));
console.log(Math.floor(num));
//using Math.floor method , we get the number as 5 & using Math.ceil  method we get the number as 6. 

//Q.5
 function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) +1 ;
    let dice2 = Math.floor(Math.random() * 6) +1 ;
    return dice1 +  dice2 ;
 } 
    console.log("You rolled a " + rollDice());


//Q.6 
/*for this query, the numbers are generated between 0 and 9 , also when added 5 , 
the numbers will be generated between 0 and 14*/

//Q.7 
function randomBetween (min, max) {
  return  Math.floor(Math.random() * (max - min + 1)) + min ;

}
 console.log(randomBetween(10,20));

//the  numbers generated are between 10 and 20. 

//Q.8
function randomBetween (min, max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min ;
  
  }
   console.log(randomBetween(5.5,9.3)); 

//Q.9 
// have doubt for this query

//Q.10 

function roundTonearestFive(num){
    const remainder = num % 5;

    if (remainder < 3){
        return num - remainder;
    }
    else {
        return num + (5 - remainder);
    }
}
//