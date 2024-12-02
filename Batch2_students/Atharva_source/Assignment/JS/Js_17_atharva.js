// Exercises: Level 1

// 1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

// A \\

let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month"

let Numbers = text.match(/\d+/g).map(Number);
let totalIncome = (Numbers[0]+ Numbers[2]) * 12 + Numbers[1];
console.log(`the total income is :- ${totalIncome}`);
console.log("-----ex.level.1-Ans.1----------")

// B \\

/* 
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/

let text1= "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles";
let Number1 = text1.match(/-?\d+/g).map(Number)
let sortedPoints = Number1.map(Number).sort((a, b) => a - b);
let distance = sortedPoints[sortedPoints.length-1]-sortedPoints[0];
console.log(`the distance between the two furthest particles is :   ${distance}`)
console.log("-----ex.level.1-Ans.2----------")

/* Have tried this points problem through different method , Not sure this is valid */


//----------------------------------------------------------------------------------------------------\\


// 2 Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

function is_valid_variable(variable) {
    let regex  = /[^a-zA-z_$/][/^a-zA-Z_$0-9]*$/
    return regex.test(variable)
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))
console.log("------Ex.levl.2-Ans-----------")





// ```javascript
// function cleanText(text) {
//     return text.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
// }

// function mostFrequentWords(text, n = 3) {
//     let cleanedText = cleanText(text);
//     return tenMostFrequentWords(cleanedText, n);
// }


// ```
// Exercises: Level 2

// 1 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

  let  Paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
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


// METHOD 1\\

function tenMostFrequentWords(paragraph, n =10) {
    let words = paragraph.toLowerCase().split(/\s+/);
    let wordCount = {};
    words.forEach(word => {
        word = word.replace(/[^\w]/g, '');
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    })

    let sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
    let result = [];
    for (let i = 0; i < n && i < sortedWords.length; i++) {
        result.push({ word: sortedWords[i], count: wordCount[sortedWords[i]] });
    }
    return result;
}
console.log(tenMostFrequentWords('I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love'))
console.log("-----ex.lev.2.Method1------------")
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

// METHOD 2\\

function TenMostFrequentWords(Paragraph) {
    const Words = Paragraph.toLowerCase().match(/\b\w+\b/g)
    let WordsCount = {}

    Words.forEach(Words => {
        WordsCount[Words] = (WordsCount[Words] || 0) + 1
    })

    return Object.entries(WordsCount).map(([Words,count])=>({Words,count})).sort((a,b)=>b.count - a.count).slice(0,10)
};
console.log(TenMostFrequentWords('I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love'))
console.log("-----ex.lev.2.Method-2----------")

//--------------------------------------------------------------------------\\


// Exercises: Level 3

// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
//   sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
//   console.log(cleanText(sentence))
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//  ```
function clean(text){
    //const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    return  text.replace(/[^\w\s]/g, "")
    
}
let cleanedText = clean('%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`')
    console.log(cleanedText)
console.log("--------ex.lev.3.Ans-1---------------")

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

function mostFrequentWords(paragraph,limit){
    const words = paragraph.toLowerCase().match(/\b\w+\b/g)
    let wordsCount = {}

    words.forEach(words =>{
        wordsCount[words] = (wordsCount[words] || 0) + 1
    })
    return Object.entries(wordsCount).map(([words,count])=>({words,count})).sort((a ,b)=> b.count - a.count).slice(0,limit)
}
console.log(mostFrequentWords(cleanedText,10))
console.log("-------ex.levl.3.Ans-2-----------")