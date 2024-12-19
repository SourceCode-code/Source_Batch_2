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

// fetchCountryData()
console.log("------------Ans.1---------------")
// // Exercises: Level 2

//1 Print out all the cat names in to catNames variable.
const fetchCatData = async ()=>{
    try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds')
        const breeds  = await response.json();

        console.log(breeds)

        breeds.forEach(({name,origin, temperament, life_span})=>{
            console.log(`Breed Name:${name}`);
            console.log(`Origin: ${origin} `);
            console.log(`Temperament: ${temperament} `);
            console.log(`Life Span: ${life_span} `);
            console.log('----------------------')
        });
    }catch (error){
        console.log('Error fetching data:', error.message)
    }
};

fetchCatData()
console.log("-----------Ans.2-----------------")

// Exercises: Level 3

//1 Read the cats api and find the average weight of cat in metric unit.
// const FetchCatData = async ()=>{
//     try{
//         const response = await fetch('https://api.thecatapi.com/v1/breeds')
//         const breeds = await response.json();
//         let sum = 0;
//         let count = 0;
//         breeds.forEach(({weight,metric})=>{
//             if(weight.metric !== undefined){
//                 sum += weight.metric
//                 count++
//             }
//         });
//         const averageWeight = sum/count;
//         console.log(`Average weight of cat in metric unit: ${averageWeight} `);
//         }catch (error){
//             console.log('Error fetching data:', error.message)
//         }
//     }
//     FetchCatData()
//2 Read the countries api and find out the 10 largest countries
//3 Read the countries api and count total number of languages in the world used as officials.

