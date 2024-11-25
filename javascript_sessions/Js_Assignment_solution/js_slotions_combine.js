// // assignment 16 -->

// //3 Write a function called convertArrayToObject which can convert the array to a structure object.

// //     const students = [
// //         ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
// //         ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// //       ]

// //     console.log(convertArrayToObject(students))
// //     [
// //       {
// //         name: 'David',
// //         skills: ['HTM','CSS','JS','React'],
// //         scores: [98,85,90,95]
// //       },
// //       {
// //         name: 'John',
// //         skills: ['HTM','CSS','JS','React'],
// //         scores: [85, 80,85,80]
// //       }
// //     ]


// function convertArrayToObject(arr) {
//     return arr.map(([name, skills, scores]) => ({
//         name,
//         skills,
//         scores
//     }))
// }


// console.log(convertArrayToObject([
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]
// ))

// [
//     {
//         name: 'David',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [98, 85, 90, 95]
//     },
//     {
//         name: 'John',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [85, 80, 85, 80]
//     }
// ]

/**
 * // *** Use the countries data to find the 10 most spoken languages:

// output be like this --->
// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 },
//     { Spanish: 24 },
//     { Russian: 9 },
//     { Portuguese: 9 },
//     { Dutch: 8 },
//     { German: 7 },
//     { Chinese: 5 },
//     { Swahili: 4 },
//     { Serbian: 4 }
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 }
// ]
 */


const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: 24117360,
        flag: 'https://restcountries.eu/data/aus.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://restcountries.eu/data/aut.svg',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://restcountries.eu/data/aze.svg',
        currency: 'Azerbaijani manat'
    }]


function mostSpokenLanguages(countries, limit) {
    const languageCount = {}

    countries.forEach(country => {
        country.languages.forEach(language => {
            languageCount[language] = (languageCount[language] || 0) + 1
        });
    })
    const sortedLanguages = Object.entries(languageCount).map(([language, count]) => ({ [language]: count })).sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
    return sortedLanguages.slice(0, limit)
}

// // const countries = [
// //     {
// //         name: 'Afghanistan',
// //         capital: 'Kabul',
// //         languages: ['Pashto', 'Uzbek', 'Turkmen'],
// //         population: 27657145,
// //         flag: 'https://restcountries.eu/data/afg.svg',
// //         currency: 'Afghan afghani'
// //     },
// //     {
// //         name: 'Åland Islands',
// //         capital: 'Mariehamn',
// //         languages: ['Swedish'],
// //         population: 28875,
// //         flag: 'https://restcountries.eu/data/ala.svg',
// //         currency: 'Euro'
// //     }]

// // countries.forEach(el=>{el.languages})

// // [  { Russian: 2 }, { Pashto: 1 }, { Uzbek: 1 },{ English: 5 }, ]

// console.log(mostSpokenLanguages(countries, 3))

// console.log(mostSpokenLanguages(countries, 4))
