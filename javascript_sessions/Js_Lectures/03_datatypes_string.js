// last lecture we saw dataypes --> numbers 
// strings----> anything that is define in 'single quotes'  , "double quotes " ,`backticks`


//example :-
let str = "          "   //
let str1 = 'siddhant'
let str2 = `12345678`
let str3 = "@@#$@#$%^&*"
let str4 = "true"

console.log(typeof (str)) // string
console.log(typeof (str1)) // string
console.log(typeof (str2))
console.log(typeof (str3))
console.log(typeof (str4))



//numbers-->
/**
 *floor  -->  gives us the lowest value of the neareast intergetr
 ceil   -->   highest
 random --> generates random number betwwen --0.0.9
 round --> 0--> 0.4 lowest  and 0.5-->0.9 -- highest
*/

// string --->  properties and methods 

// there are many methods in string 
// touppercase 
// tolowercase
//str
//substr
//match
//replace
//etc

//properties -->
//1 string has only one property that is length
//2 charcate is based form indexing //

//     's i d d h a n t'
//      0 1 2 3 4 5 6 7  ==>8


let str5 = 'one'

// sytnax to get the string character 
console.log(str5[1])


let firstname = "siddhant"
let lastname = "gadakh"
let middlename = "arjun"

// string concantination with addition opertaor 

let fullname = firstname + " " + middlename + " " + lastname
console.log(fullname)

//ES6 --> ``

let fullnamenew = `my full name is ${firstname} ${middlename} ${lastname}`

console.log(fullnamenew)


//string --
//"----------------------------------------------------------------------------------------------"
let str7 = "wertghjkjnhbgfdertyuijhbvfdrtyujhbgfrtyujnbvcdertyujhcxsaertyuijhgfrtyu\
ghjkiuyhjkiuhbnmkiuhbnmkiujh\  string which consist of multiple lines is called long literall string \
hgbnmkiuhnmkjhbnmjh\
nhbnmkjhnmkj"


let paragraph ="dtfghijoiuytfhvbjnkjouyugfyhvnbnkjuiyugfhvnbkhghvnbkhgvhnbmnkhgjvnbmbdsvkjbvhfkdfhbbjkkk\
kkkkkkkkkkkkkkkkkkkkkkkkkfhgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj\
kjhgfhbjkiyugjbnkjlouiyhjnkljihjgbmn"
console.log(str7)


// escape character ===>

//how to find or detect escape character

//  \ -- if any thing in string begins with a backlash it is and ecsape character 

//usescases--

// (\) -- used to delecre long literall string 

// i am learning js 

//(\n) --use to print the string in new line 

console.log('i\nam \nlearning\njs ')

// (\t) -- tab key (use to give 8 spaces)

let str9='siddhant\tgadakh'
console.log(str9)



//(/') -- used to add '' in a string delecraed with single qutoes 

let str10='hello my name is \'siddhant\' '
console.log(str10)
//(/") -- used to add '' in a string delecraed with single qutoes 
let str11="hello my name is \"siddhant\" "

console.log(str11)