// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'


// // Exercises: Level 1

//1 Read the countries API using fetch and print the name of country, capital, languages, population and area.

let api = "https://restcountries.com/v2/all"

fetch(api).then(respone=>
    respone.json()).then(countries=>{
        countries.forEach(country=>{
            console.log(`country : ${country.name}`)
        })
    })




// // Exercises: Level 2

//1 Print out all the cat names in to catNames variable.


// Exercises: Level 3

//1 Read the cats api and find the average weight of cat in metric unit.
//2 Read the countries api and find out the 10 largest countries
//3 Read the countries api and count total number of languages in the world used as officials.
[
    {
        "name": "Afghanistan",
        "topLevelDomain": [
            ".af"
        ],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": [
            "93"
        ],
        "capital": "Kabul",
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
        "subregion": "Southern Asia",
        "region": "Asia",
        "population": 40218234,
        "latlng": [
            33,
            65
        ],
        "demonym": "Afghan",
        "area": 652230,
        "timezones": [
            "UTC+04:30"
        ],
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
        "nativeName": "افغانستان",
        "numericCode": "004",
        "flags": {
            "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        },
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
        ],
        "translations": {
            "br": "Afghanistan",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "hu": "Afganisztán"
        },
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "AFG",
        "independent": true
    }
]    
