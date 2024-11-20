// ) print the longest word form the given string
str = " hello i am learning javascript and currently i am seeing the topic loops"
let str1 = str.split(' ')
let longestWord = ''
for(let i = 0;i<=str1.length;i++){
  if(str1[i].length > longestWord.length){
      longestWord = str1[i]
  }
}
console.log(longestWord)/// not understood that problem

// unable to solve nested loops
//
