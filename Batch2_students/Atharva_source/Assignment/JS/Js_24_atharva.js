// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'


// // Exercises: Level 1

//1 Read the countries API using fetch and print the name of country, capital, languages, population and area.
const fetchCountryData = async ()=>{
    try{
        const response = await fetch('https://restcountries.com/v2/all')
        const countries = await response.json();

        countries.forEach(({name,capital,languages,population,area})=>{
            console.log(`Country :${name}`)
            console.log(`Capital: ${capital } `)
            console.log(`Languages: ${languages.map((lang =>lang.name))} `)
            console.log(`Population: ${population} `)
            console.log(`Area: ${area}sq km `)
            console.log('------------//----------')
        });
    }catch (error){
        console.log('Error fetching data:', error.message)
    }
};

//  fetchCountryData()
console.log("------------Ans.1---------------")
// // Exercises: Level 2

//1 Print out all the cat names in to catNames variable.
const CatData = async ()=>{
    const Response = await fetch('https://api.thecatapi.com/v1/breeds')
    const CatData = await Response.json()
    new Promise((resolve,reject)=>{
        let Cat = CatData.map(({name})=>{
            return{
                CatNames:name
            }
        })
        resolve(Cat)
    }).then((message)=>{
        console.log(message)
    }).catch((error)=>{
        console.log(error)
    })
}
// CatData()
console.log("-----------Ans.2-----------------")

// Exercises: Level 3

//1 Read the cats api and find the average weight of cat in metric unit.
// const AvgWeight = async()=>{
//     const Response = await fetch('https://api.thecatapi.com/v1/breeds')
//     const CatData = await Response.json()
//     new Promise((resolve)=>{
//         let cats = CatData.map((el)=>{
//             return (el.name)
//         })
//         console.log(cats)
//         let Dcat = CatData.map((el)=>{
//             return (el.weight.metric)
//         })
//         let Dcat1 = Dcat.forEach((el)=>{
//             let po = (el.split("-"))
//             po.reduce((el,index)=>{
//                 return console.log(([Number(el) + Number(index)]) / 2)
//             })
//         })
//         resolve(Dcat1)
//         }).then((message)=>{
//             console.log(message)
//         }).catch((error)=>{
//             console.log(error)
//         })        
// }
// AvgWeight()

//2 Read the countries api and find out the 10 largest countries
const largestCountry = async ()=>{
    const Response = await fetch('https://restcountries.com/v2/all')
    const CountryData = await Response.json()
    new Promise((resolve)=>{
        let Country = CountryData.map((el)=>[el.name, el.population]).sort((a,b)=>b[1]-a[1]).slice(0,10)
        resolve(Country)
        }).then((message)=>{
            console.log(message)
        }).catch((error)=>{
            console.log(error)
        })
}
largestCountry()
console.log("---------Ans.2-Ex.lev-3------------")
//3 Read the countries api and count total number of languages in the world used as officials.
// const countLanguage = async ()=>{
//     const response = await fetch('https://restcountries.com/v2/all')
//     const countries = await response.json()
//     let lang = new Set()
//     for (let key of countries){
//         let lang  = key.languages
//         lang.forEach((el)=>{
//             lang.add(el.name)   
//         })
//     }
// }
// countLanguage()


//------------------More Questions \\

// 1 Problem: Write a function batchProcess(tasks, batchSize) that takes an array of asynchronous tasks and runs them in batches of size batchSize. Return the results in the correct order.
async function batchProcess(tasks, batchSize){
    const results = []

    let batch = [];
    for (let i =0; i < tasks.length; i++){
        batch.push(tasks[i])

        if(batch.length === batchSize || i === tasks.length-1){
            const batchResult = await Promise.all(batch.map(task=>task()));
            results.push(...batchResult);
            batch = [];
    }   
}
return results;
    
}
const tasks = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve(2), 5000)),
  () => new Promise(resolve => setTimeout(() => resolve(3), 3000)),
  () => new Promise(resolve => setTimeout(() => resolve(4), 7000))
]
batchProcess(tasks, 2).then((results)=>console.log(results))
console.log("------Ans-1-Adv-Queries-------")

// 2 Problem: Write a recursive function fetchDataRecursively(urls) that takes an array of URLs, fetches data from each URL, and returns the results in an array. Use async/await, ensuring the requests happen one after another.
async function fetchDataRecursively(urls){
    let Result =[]
    for (let url of urls){
        const response = await fetch(url)
        const data = await response.json()
        Result.push(data)
    }
    return Result
}
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
]
fetchDataRecursively(urls).then((result)=>console.log(result))
console.log("------Ans-2-Adv-Queries-------")
// 3 Problem: Write a function chainPromises(tasks) that executes an array of asynchronous functions sequentially. Each task depends on the result of the previous one.
async function chainPromises(tasks){
    let result = null;
    for (let task of tasks){
        result = await task(result);
    }
    return result;
}
const Tasks = [
    (prevResult) => new Promise(res => setTimeout(() => res(prevResult + 11),2500)),
    (prevResult) => new Promise(res => setTimeout(() => res(prevResult + 2),3500))
]
chainPromises(Tasks).then((result)=>console.log(result))
console.log("-------Answerrrrr--------")

// 4 Problem: Create a function fetchWithRetryAndTimeout(fn, retries, timeout) that calls an asynchronous function fn with a specified timeout and retries up to retries times if it fails.



// 5.Problem: Implement a semaphore(limit) function that restricts the number of concurrent asynchronous operations. It should allow at most limit tasks to run at the same time.


// 6.Problem: Write a function handleAll(tasks) that takes an array of promises and returns an object:
// 	•	{ results: [...], errors: [...] }
// where results contains resolved values and errors contains rejected errors.
async function handleAll(Task){
    let RESULT = []
    for (let task of Task){
        let result1 = await task()
        RESULT.push(result1)
    }
    return RESULT
}
const TASK = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 4000)),
]
handleAll(TASK).then((result)=>console.log(result))

// 7.Problem: Implement a function dynamicChain(tasks) that dynamically constructs a chain of Promises where each task depends on the previous one’s result. The tasks are provided dynamically during runtime.
async function dynamicChain(tasks){
    let result2 = undefined;
    for(let task of tasks){
        result2 = await task(result2);
    }
    return result2
}
const task1 = (input)=new Promise (resolve => setTimeout(() => resolve(input ? input + 1 : 1)))
const task2 = (input)=new Promise (resolve => setTimeout(() => resolve(input + 7),2000));
const task3 = (input)=new Promise (resolve => setTimeout(() => resolve(input + 3),3000))

const TASk = [task1,task2,task3]

dynamicChain(tasks).then((finalResult)=>console.log(finalResult))
// 8.Problem: Create a priorityQueue(tasks) function that executes asynchronous tasks based on their priority. Each task is represented as an object { fn, priority }. Higher priority tasks should execute first.
async function priorityQueue(tasks){
    tasks.sort((a,b)=>b.priority-a.priority)
    for(let task of tasks){
        await task.fn()
    }
    return "Done"

}
const Task1 = {
    fn: () => new Promise(resolve => setTimeout(() => resolve('Task 1'))),
    priority: 2
}
const Task2 = {
    fn: () => new Promise(resolve => setTimeout(() => resolve('Task 2'))),
    priority: 1
}
const Task3 = {
    fn: () => new Promise(resolve => setTimeout(() => resolve('Task 3'))),
    priority: 3
}
const TasK = [Task1,Task2,Task3]
priorityQueue(TasK).then((result)=>console.log(result))

// 9.Problem: Implement a CancelablePromise class that wraps an existing promise and provides a cancel() method to reject the promise early.
class CancelablePromise {
    constructor(promise) {
        this._promise = promise;
        this._isCanceled = false;
    }
    cancel() {
        this._isCanceled = true;
        this._promise.reject('Canceled');
    }
    then(onFulfilled, onRejected) {
        return this._promise.then(onFulfilled, onRejected);
        }
        catch(onRejected) {
            return this._promise.catch(onRejected);
        }
    }



// 10 Problem: Write a function throttleRequests(urls, limit) that takes an array of URLs and sends HTTP requests to fetch them. Limit the number of concurrent requests to limit. Return all results in order.