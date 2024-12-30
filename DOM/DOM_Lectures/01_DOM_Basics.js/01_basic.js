// DOM --> Document object model

// the dom is a fundamental concept in web development that allows you to interact with html


/**
 * what is dom -->
 * 
 * dom is an interface that represents the structure of the web page as a tree of obejct
 * 
 * it allows js to :
 * 
 * 1 access and maniplaute element
 * 
 * 2 changes in the webpage dynmaic 
 * 
 * 
 * 
 * KEY POINTS:--
  html is converted into dom by the browser 

  the dom is not the html its representation of html document


DOM Tree structure 

there different type of nodes or bracnhes 

1 document node --> represent the entire document --> {this means this the root of the tree}

2 elements nodes --> represnts the html elemnts --> { <div>,<body>,<h1>,<head>,<button>}

3 text nodes --> the text inside the element --> 

4 atrribute node --> represnts the attribute of elemnts -> { id ,class, type, src,href}

 */

/**
 * <!DOCTYPE html>
   |__  <html lang="en">
          |____     <head>
          |          |___ <meta charset="UTF-8">
          |          |___ <meta name="viewport" content="width=device-width, initial-scale=1.0">
          |          |___<title>My Page for learning</title>
          |          </head>
          |____     <body>
                      |___ <h1>Hello world</h1>
                      |___ <p> this is a page for learning dom basics </p>
                      |___ </body>
        </html>
 */



/**
 * 
 * break down of a normal elemnet in dom 
 * 
 * <tagname>   attriubte       atrribute  = "value"                       atrribute  = "value"
 *    |           |              |        |    |
 * <input     data-v-1f99f73c  class      = "oxd-input oxd-input--active" type="password" name="password" placeholder="Password">
 * 
 * 
 * example 2 
 *  <tagname  attribute                         attribute  = "value"                             > Text <ending tagname>
 * <h5 data-v-7b563373="" data-v-0af708be="" class="oxd-text oxd-text--h5 orangehrm-login-title">Login</h5>
 *  */        