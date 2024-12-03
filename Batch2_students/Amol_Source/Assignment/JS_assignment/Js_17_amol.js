// Exercises: Level 1

// 1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// let sent = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// let check = (sent.match(/\d+/g)).map(Number)//  we use map method to conver all numbers
//  let annualinco  = (check[0]+check[2])*12+check[1]
//  console.log(annualinco)

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
// let line = "The position of some particles on the horizontal x-axis -1, -2, -4, -3 and -1 in the negative direction, 0 at origin,2, 4 and 8 in the positive direction."
// let points = line.match(/-?\d+/g)
// console.log(points)
// let sortedPoints = points.sort((a,b)=>a-b)
// console.log(sortedPoints)
// let lineDistance = points[points.length-1]-points[0]
// console.log(lineDistance)

// 2 Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
 
// function is_valid_variable(variable){
// let check = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
// return check.test(variable)

// }
// console.log(is_valid_variable("1first_name"))

// Exercises: Level 2

// 1 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(para,limit){
    const mostLang = para.match(/\b\w+\b/g)
   console.log(mostLang)
    // mostRepeated = {}
    // mostLang.forEach((word)=>{
    //     (mostRepeated[word]) = (mostRepeated[word]||0)+1
    // })
    // return Object.entries(mostRepeated).map(([word,count])=>({word,count})).sort((a,b)=>b.count-a.count).splice(0,limit)

}
console.log(tenMostFrequentWords(paragraph,10))

//     console.log(tenMostFrequentWords(paragraph))
//     [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]
// console.log(tenMostFrequentWords(paragraph, 10))
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]
// Exercises: Level 3

// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(sent){
return sent.replace(/[^\w\s]/gi,"")// ^
} 
cleanSentence = cleanText(sentence)
console.log(cleanSentence)
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//  ```
// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
function mostFrequentWords(sentence,limit){
    let splitedsentence = sentence.match(/\b\w+\b/g)
mostrepeated = {}
splitedsentence.forEach((word)=>{
(mostrepeated[word]=(mostrepeated[word]||0)+1)
})
return Object.entries(mostrepeated).map(([word,count])=>({word,count})).sort((a,b)=>b.count-a.count).slice(0,limit)

}
console.log(mostFrequentWords(cleanSentence,20))
// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

//ask anout .(dot Character) if string of  word so we have to put 6 dot or jsut 1 donggt
// also ? thid operatter
// \b use for with example
// ask about Spread and rest operater

//\d: Matches any digit (equivalent to [0-9]).
//\w: Matches any word character (letters, digits, and underscores, equivalent to [a-zA-Z0-9_]).
//\s: Matches any whitespace character (space, tab, newline).