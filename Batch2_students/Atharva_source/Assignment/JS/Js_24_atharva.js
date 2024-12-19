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

fetchCountryData()

// // Exercises: Level 2

//1 Print out all the cat names in to catNames variable.
// const fetchCatData = async ()=>{
//     try {
//         const response = await fetch('https://api.thecatapi.com/v1/breeds')
//         const breeds  = await response.json();

//         console.log(breeds)

//         breeds.forEach(({names,origin, temperament, life_span})=>{
//             console.log(`Breed Name:${names}`);
//             console.log(`Origin: ${origin} `);
//             console.log(`Temperament: ${temperament} `);
//             console.log(`Life Span: ${life_span} `);
//         });
//     }catch (error){
//         console.log('Error fetching data:', error.message)
//     }
// };

// fetchCatData()


// Exercises: Level 3

//1 Read the cats api and find the average weight of cat in metric unit.
//2 Read the countries api and find out the 10 largest countries
//3 Read the countries api and count total number of languages in the world used as officials.

