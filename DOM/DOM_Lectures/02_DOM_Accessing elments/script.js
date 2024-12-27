// how to acess elements in dom 

// while automtion your goal should be always to create a robust locator 
// and it should always be 1 outoff 1 
//------------------------------------------------------------------------
// how to select the element by tagname :-

// automation testing

"h1" // just write the tagname 

// by development perpesctive

const h1 = document.getElementsByTagName("h1")

//------------------------------------------------------------------------

// how to select the element by classname 

// automation testing perpespetive 

// [attr = value]
//[class="heading"] 

// another method 
// ".heading" -- add dot before classname to select it

// by development perpesctive
//first

const classselector = document.getElementsByClassName("heading")

// method 2 

const clselect= document.querySelector(".heading")

//------------------------------------------------------------------------------

//how to select element by id -->

// automation testing perpespetive 

// [id="heading2"]

// another method 
// #heading2 // just add hastag before the value of id

// by development perpesctive
//first

const idselector = document.getElementById("heading2")

// method 2 

const idselect= document.querySelector("#heading2")
//-----------------------------------------------------------------------------------------
// by getting value and attribute in genral formula 


// by a general formula  
// in automation testing

//formula -->  tagname[attribute="value"]

// example --h2[id="heading2"]
