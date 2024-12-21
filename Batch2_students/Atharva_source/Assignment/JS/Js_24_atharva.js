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
const countLanguage = async ()=>{
    const response = await fetch('https://restcountries.com/v2/all')
    const lang = await response.json()
    new Promise((resolve)=>{
        let countries = lang.map((el)=>el.languages)
        let count = countries.reduce((acc,el)=>{
            return acc + Object.values(el).length
        },0)
        resolve(count)
    }).then((message)=>{
        console.log(message)
    }).catch((error)=>{
        console.log(error)
    })
}
countLanguage()


