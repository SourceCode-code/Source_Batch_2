// Exercises: Level 1

// 1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let str = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

let numbers = str.match(/\d+/g).map(Number)
console.log(numbers)

let totalanuualincome = (numbers[0] + numbers[2]) * 12 + numbers[1]

console.log("the annual salary is ", totalanuualincome)


//2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]



let str2 = " The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles."

let numbers1 = str2.match(/-?\d+/g).map(Number)

console.log(numbers1)

let sortedpoints = numbers1.sort((a, b) => a - b)
console.log(sortedpoints)

const distance = sortedpoints[sortedpoints.length - 1] - sortedpoints[0]

console.log(distance)

// 3 Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True  
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

//

function is_valid_variable(variable) {
    const regex = /^[a-zA-z_$][a-zA-Z_$0-9]*$/
    return regex.test(variable)
}

console.log(is_valid_variable("first_name1"))




// Exercises: Level 2

// 1 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

//     paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
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


let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g)
    //const words = paragraph.toLowerCase().split(" ")
    let wordscount = {}

    words.forEach(words => {
        wordscount[words] = (wordscount[words] || 0) + 1
    })

    return Object.entries(wordscount).map(([words, count]) => ({ words, count })).sort((a, b) => b.count - a.count).slice(0, 10)

};




console.log(tenMostFrequentWords(`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`))

/**[
  { words: 'love', count: 6 },
  { words: 'you', count: 5 },
  { words: 'can', count: 3 },
  { words: 'i', count: 2 },
  { words: 'teaching', count: 2 },
  { words: 'if', count: 2 },
  { words: 'do', count: 2 },
  { words: 'not', count: 2 },
  { words: 'what', count: 2 },
  { words: 'else', count: 2 }
] */

// Exercises: Level 3

// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
//   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
//   console.log(cleanText(sentence))
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//  ```
// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]


sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function clean(text) {
    return text.replace(/[^\w\s]/g, "")
}

let cleanedstr = clean(`%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`)

//I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

function tenMostFrequentWords(paragraph, limit) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g)
    //const words = paragraph.toLowerCase().split(" ")
    let wordscount = {}

    words.forEach(words => {
        wordscount[words] = (wordscount[words] || 0) + 1
    })

    return Object.entries(wordscount).map(([words, count]) => ({ words, count })).sort((a, b) => b.count - a.count).slice(0, limit)

};

console.log(tenMostFrequentWords(cleanedstr, 1))