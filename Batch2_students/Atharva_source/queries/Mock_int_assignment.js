
// MATH Method : We use this method for number manipulation */

//ROUNDING : 
//Math.round() - this method rounds a number to the nearest integer //
//If the float integer is below 0.5 ; it rounds Down to 0 .
//if the float integer is 0.5 and above ; it rounds Up to 1.

// //Examples of Math.round() method: //

// 1
let Num3 = 0.9;
console.log(Math.round(Num3));// output : 1; Explanation : As the number is above 0.5 , it rounds Up to 1

//2 
let NUMBER1 = 0.757;
console.log(Math.round(NUMBER1)); // output : 1 ; Explanation : As the number is above 0.5 , it rounds Up to 1

//3
let NUMBER2 = 0.957;
console.log(Math.round(NUMBER2)); //output: 1 ; Explanation : As the number is above 0.5 , it rounds Up to 1.


//4
let NUMBER3 = 0.3;
console.log(Math.round(NUMBER3)); // output:  0; Explanation : As the number is below  0.5 it rounds Down to 0.


// 5 
let NUMBER4 = 0.49;
console.log(Math.round(NUMBER4)); //Output: 0 ; Explanation : As the number is below , it rounds Down to 0 .

//6 
let NUMBER5 = 0.92;
console.log(Math.round(NUMBER5)); // output 1 ; Explanation : As the number is above 0.5 , it rounds Up to 1.

//7 
let NUMBER6 = 19.75;
console.log(Math.round(NUMBER6)); // output : 20 ; explanation : as the number is above 0.5 ,  it rounds Up to 20.


let kl = 24.99;
console.log(Math.round(kl)); // 25

let Ty = 44.78;
console.log(Ty); // 45


let Tuy = 7886.78;
console.log(Tuy); //7887

//-----------------------------------------------------------------------------------------------------------------///

/*MATH.CEIL  : This method converts a float integer to the Nearest Highest Integer */

//EXAMPLES Of Math.ceil() method : // 

// 1 
let NUMBER7 = 15.76;
console.log(Math.ceil(NUMBER7)); // output:16 ; Explanation : it gives the output as 16 because the nearest highest integer to 15.76 is 16 

//2 

let NUMBER8 = 788.91;
console.log(Math.ceil(NUMBER8)); // output:789 ; explanation: it gives the output as 789 , because the nearest highest integer close to 788.91 is 789.

//3
let NUMBER9 = 987.898;
console.log(Math.ceil(NUMBER9));// output:988 ; explanation: it gives the output as 988 , because the nearest highest integer close to 987.898 is 988.

//4 
let NUMBER10 = 1095.78;
console.log(Math.ceil(NUMBER10));//output:1096; explanation:it gives the output as 1096, as the nearest highest integer close to 1095.78 is 1096.

//5
let NUMBER11 = 12293.788;
console.log(Math.ceil(NUMBER11));//output:12294; explanation:it gives the output as 12294 as the nearest highest integer close to 12293.788 is 12294.

//6 
let NUMBER12 = 149.79;
console.log(Math.ceil(NUMBER12));//output: 150 ; explanation: it gives the output as 150 as the nearest highest integer close to 149.

//7 
let NUMBER13 = 1595.84;
console.log(Math.ceil(NUMBER13));//output :1596; explanation:it gives the output as 1596 as the nearest highest  integer close to 1595.84 is 1596.

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

/*MATH.FLOOR() - This method  converts a float integer to the Nearest Lowest Integer */ 

//Examples  of Math.floor() method : // 

//1 
let NUMBER14 = 19.75;
console.log(Math.floor(NUMBER14)); //Output :19

//2 
let NUMBER15 = 199.52;
console.log(Math.floor(NUMBER15));//output: 199 

//3 
let NUMBER16 = 7889.99;
console.log(Math.floor(NUMBER16));//output :7889

//4 
let NUMBER17 = 95945.798;
console.log(Math.floor(NUMBER17));//output:95945

//5
let NUMBER18 = 8756.45;
console.log(Math.floor(NUMBER18));//output: 8756

//6
let NUMBER19 = 987.2;
console.log(Math.floor(NUMBER19));//output: 987

//7
let NUMBER20 = 9564.76;
console.log(Math.floor(NUMBER20));
//output: 9564

//------------------------------------------------------------------------------------------------------------////

/*MATH.RANDOM() = This method generates a random number between 0 and 1 (0-0.9) */

//examples // 

//1 
console.log(Math.floor(Math.random()* 100000) *100000); // generates a random 10 digit number//

//2 
console.log(Math.floor(Math.random()* 11)); // generates a random number between 0 and 10//

//3
console.log(Math.floor(Math.random()* 15)); //generates a random no. between 0 and 14//

//4 
console.log(Math.floor(Math.random()* 1000) + 15);//generates a random number between  100 and 1014

//5 
console.log(Math.floor(Math.random()* 6) + 1);  //generates a random number between 1 and 6

//----------------------------------------------------------------------------------------------------//

//STRINGS : Strings in JS can be declare by : "" , '',  ` ` //

//examples //

//1 
let  STRING1 = "Hello there";

//2 
let STR2 =`hola`; // specifically used for template literals//

//3 
let STR3 = 'beunos dias' ;

//4
let STR4 = ""; //this is considered as an Empty string.

// 5
console.log(typeof(STR2)); //gives the output as string. // typeof operator  is used to get the datatype//

//----------------------------------------------------------------------------------------------------//

//String Methods and properties// 

//PROPERTIES// 
//1: Length: this property returns the length of a string.

//2: Indexing: this property returns the exact character present at a particular index.//

/*3: String concatenation: this can be achieved by : 1: the '+' operator , 
2: using template literals, 3: using literal strings and 4: using escape characters.

//String methods: 
//1 : toUpperCase() : // converts a string to the uppercase 
//2 : toLowerCase() : //converts a string to the lowercase
//3 : substr() : // extracts a Part of a particular string. 
//4 :match() : //searches for a Match in a string
//5 : replace()//replaces a part of the string.

//-----//

// //Examples of String properties// 
// //1 : length 
let Str1 = "hello there";
console.log(Str1.length); //gives the length 11 as the output. 
//-------------------------------------------------------------------------//

//2 :  indexing 
let Str2 = "this is javascript";
console.log(Str2[16]); //output : p

//-------------------------------------------------------------------------//

//3 : concatenation 
let Str3 = "Atharva";
let Str4 = "Vijay";
let Str5 = "Pandit"

console.log(Str3 + " " + Str4 + " " + Str5); // output : Atharva  Vijay Pandit//

//---------------------------------------------------------------------------//

//4 template literals//
let Str6 = `My name is ${Str3} ${Str4} ${Str5}`;
console.log(Str6); // output: My name is Atharva Vijay Pandit//


//----------------------------------------------------------------------------------------//
//5 : Literal Strings : strings that span across multiple lines are called literal strings//
let  Str7  = `asdfghjklkjhgfasdfghjhgfdsa\
ertyuiopoiuytrewertyuiuytrew\
asdfghjkjhgfd`;


console.log(Str7); //output :asdfghjklkjfdsaaasda// 
//-----------------------------------------------------------------------------//
//6 : Escape Characters . : These are special characters used in strings starting with a backslash (\) . //

// ( \n ) = Newline : 
console.log('hi\nI am \natharva\n'); //it gives the string in a new line 

console.log('hey\nI pinged\nyou\on\whatsapp\n');

console.log('Oh \nthere \nis \na dog\n');

console.log('this \nis \na \nmobile phone\n');

console.log('yes \nthis is\nan \niphone\n');

//---------------------------------------------------------------------------------//
// ( \t )  = Tab : Used to add 8 spaces
let Str8 = 'Hello\tWorld';
console.log(Str8);

let ikj = 'Hallo\tthere';
console.log(ikj); 

let rfg = 'Coffe\tmilk';
console.log(rfg);

let uij = 'thank\you';
console.log(uij);

let okl = 'aye\captain';
console.log(okl);

//-------------------------------------------------------------------------------//

// ( \' ) Adding single quotes in a string declared with single quotes
let  Str9 = 'Hello , my name is \'Atharva\'';
console.log(Str9);

let Guy = 'Hello , the theme is \'Black\'';
console.log(Guy);

let srt = 'hola , como \'estas\'';
console.log(srt);

let hfg = 'hi , this is \'the document\'';
console.log(hfg);

let tyb = 'there is a \'book\'';
console.log(tyb);

//---------------------------------------------------------------------------///

// ( \") Adding double quotes in a string declared with double quotes 
let Str10 = 'Hello  , my name is \"Atharva\"';
console.log(Str10);

let Str11 = 'Hallo , Ich bin \"Atharva\" ';
console.log(Str11);

let Str12 = 'Hallo , caffee und \"Milch\" , bitte ';
console.log(Str12);

let Str13 = 'eine mutter, \"ein vater\" ';
console.log(Str13);

let Str14 = 'hallo dis \"stadt is schon\"';
console.log(Str14);

//---------------------------------------------------------------------------------------//

//METHODS// 

//1 .getting the last element in the string 
let  qwe = 'Atharvapandit';
console.log(qwe[qwe.length-1]);  //output : t

//2 
let uop = 'Lenovothinkpad';
console.log(uop[uop.length-1]); //output: d//

//3 
let ghk ='utopia';
console.log(ghk[ghk.length-1]); //output:a//

//4 
let pit = 'indirapagannato';
console.log(pit[pit.length-1]); //output:o//

//5
let mnb = 'ocsav';
console.log(mnb[mnb.length-1]); //output:v

//----------------------------------------------------//

//2 . string concatenation by method chaining 
//a 
let tyl = 'redgear';
console.log(tyl.toUpperCase().toLowerCase().toUpperCase());//output:REDGEAR

//b 
let tel = 'cosmicbyte';
console.log(tel.toUpperCase().toLowerCase().toUpperCase());//COSMICBYTE/

//c 
let klj = 'legion';
console.log(klj.toUpperCase().toLowerCase().toUpperCase());//LEGION//

//d 
let rqs = 'okasa';
console.log(rqs.toUpperCase().toLowerCase().toUpperCase());//OKASA

//e 
let qaz = 'ricky';
console.log(qaz.toUpperCase().toLowerCase().toUpperCase());//RICKY//

//---------------------------------------------------------------------------//

//3 .Substr method : method to get specific characters from a string where starting index,
 and No. of characters are needed) 

//a 
let asd = 'Macintosh';
console.log(asd.substr(0,4));//output : Maci

//b 
let das = 'Probook';
console.log(das.substr(0,6));//output : Proboo//

//c
let ijf = 'Notebooks';
console.log(ijf.substr(0,8));//output:Notebook//

//d 
let lit = 'artifacts';
console.log(lit.substr(0,7)); //artifac//

//e 
let til = 'rezident';
console.log(til.substr(0,));//reziden//

//f 
let cdc = 'gamingchair';
console.log(cdc.substr(0,9));//gamingcha// 

let nbv = 'powerclub';
console.log(nbv.substr(0,7))

//---------------------------------------------------------//

//4 Substring : This method gets a part of a string (start index, end index -inclusive )
//a 
let CDC = 'gamingchair';
console.log(CDC.substring(6));//output: chair//

//b 
let DCC = 'gamingsetup';
console.log(DCC.substring(0,9));//gamingset//

//c 
let TTT = 'lookalike';
console.log(TTT.substring(8)); //e //

//d 
let IOK = 'BoatStone700';
console.log(IOK.substring(11));// 0 //

//e 
console.log(IOK.substring(9)); //700//
//---------------------------------------------------------//

//5 Splitting strings

//a 
var LOC =  'this is a dome';
console.log(LOC.split(" "));//[ 'this', 'is', 'a', 'dome' ] //

//b 
console.log(LOC.split("a")); //[ 'this is ', ' dome' ] //

//c 
console.log(LOC.split(""));/*[
    't', 'h', 'i', 's',
    ' ', 'i', 's', ' ',
    'a', ' ', 'd', 'o',
    'm', 'e'
  ]*/ 

//-----------------------------------------------------------------------//


// 6 : Trim . TrimStart, TrimEnd

//a 
let TtT = '   this is a string   ';
console.log(TtT.trim());//this is a string//

//b 
console.log(TtT.trim().length);// 16: output//

//c 
let uyt = '  This is a String  ';
console.log(uyt.trimStart());//This is a String  //

//d 
console.log(uyt.trimEnd());//    This is a String //

//-------------------------------------------------------//

//7 Checking the index of a character using indexOf()

// a 
let sss = 'operator';
console.log(sss.indexOf('o')); // 2

//b 
console.log(sss.indexOf('r'));//3

//c 
let SdS = 'Assualt';
console.log(SdS.indexOf('t'));//6//

//d 
let IoS = 'Function';
console.log(IoS.indexOf('i'));//5

//e
console.log(IoS.indexOf('t'));//4 

//----------------------------------------------------//

//8 concatenating strings using concat()
let  sss1 = 'Hello ';
let sss2 = 'there';
let sss3 = 'greetings';
console.log(sss3.concat(sss1,sss2));// greetingsHello there //
//-------------------------------------------------------------//

//9 String concatenation using startsWith() and endsWith()

console.log(sss1.startsWith("H"));//true 
console.log(sss2.endsWith("e"));//true
console.log(sss3.endsWith("g"));//false

//10 Repeating strings using repeat()

let iii = 'push';
console.log(iii.repeat(5));//pushpushpushpushpush

let ooo = 'yourself';
console.log(ooo.repeat(8)); //yourselfyourselfyourselfyourselfyourselfyourselfyourselfyourself//


//11 Using match() to search for a pattern 
let UUU = "This is a javascript tutorial";
console.log(UUU.match("tutorial")); /*[
    'tutorial',
    index: 21,
    input: 'This is a javascript tutorial',
    groups: undefined
  ] */



        



































































































 */