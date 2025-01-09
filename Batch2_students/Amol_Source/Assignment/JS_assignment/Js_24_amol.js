const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1

//1 Read the countries API using fetch and print the name of country, capital, languages, population and area.
const fetchCountryData2 = async () => {
    const response = await fetch('https://restcountries.com/v2/all')
    const countries = await response.json();
    new Promise((resolve, reject) =>{
        let kk = countries.map(({ name, capital, languages, population, area }) => {
           return{ 
            countryName:name,
            countryCapital:capital,
            Languages:languages,
            Population:population,
            Area:area
        }
        })
        resolve(kk)
    })
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })
}
fetchCountryData2()

// Exercises: Level 2

//1 Print out all the cat names in to catNames variable.

const catNames1 = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const thecatapi = await response.json();
    new Promise((resolve) => {
        let cattype = thecatapi.map(({ name }) => {
            return {
              Catnames:name
            }
        })
        resolve(cattype)
   })
     .then((message) => {
      console.log(message)
        }).catch((error)=>{
            console.log(error)
        })
}
catNames1()

// Exercises: Level 3

// 1 Read the cats api and find the average weight of cat in metric unit.
const catNames = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const thecatapi = await response.json();
    new Promise((resolve) => {
        let catname = thecatapi.map((el) => {
            return (el.name)
        })
        console.log(catname)
        let finalchecck = thecatapi.map((el) => {
            return (el.weight.metric)
        })
        let check1 = finalchecck.forEach((el) => {
            let kk = (el.split("-"))
            kk.reduce((el, index) => {
                return console.log(([Number(el) + Number(index)]) / 2)
            })
        })
        resolve()
    }).then((message) => {
        console.log(message)
    }).catch((error)=>{
        console.log(error)
    })
}
catNames()
// 2 Read the countries api and find out the 10 largest countries
const fetchCountryData = async () => {
    const response = await fetch('https://restcountries.com/v2/all')
    const countries = await response.json();
    new Promise((resolve) => {
        let largestCountry = countries.map((el) => [el.name, el.population]).sort((a, b) => b[1] - a[1]).slice(0, 10)
        resolve(largestCountry)
    }).then((message) => {
        console.log(message)
    }).catch((error) => {
        console.log(error)
    })
}
fetchCountryData()

// 3 Read the countries api and count total number of languages in the world used as officials.
const fetchCountryData1 = async () => {
        const response = await fetch('https://restcountries.com/v2/all')
        const countries = await response.json();
        let TotalLanguage=new Set()
        for(let key of countries){
            let lang = key.languages
            lang.forEach((el)=>{
                TotalLanguage.add(el.name)
            })
        }
            let check = TotalLanguage
         console.log(check.size)
}
fetchCountryData1()