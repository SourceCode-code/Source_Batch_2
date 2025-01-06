// selectors
/*
* using tagName (whatever tagname)
* using class( using square braket and (.)sung dot with remove space)
*using id( using Square bracket or using # (hashtag))
* using attribute ( that is [attribute Name = " attribute value"])
* using general formula(tagname[attribute="attribute Value"])
*/

//flipcart website = https://www.flipkart.com/

/* SELECTOR FOR SEARCH BAR
Way1 =  [class="Pke_EE"]
way 2 = input[type="text"]
*/

/* SELECTOR FOR LOGIN
way 1 = [class="H6-NpN _3N4_BX"]
way 2 = [href="/account/login?ret=/"]
*/

/*SELECTOR FOR CART
way 1 = [class="_3RX0a-"]
way 2 = img[alt="Cart"]
way 3 = img[alt="Cart"][class="_1XmrCc"]
*/

/*SELECTOR FOR Become a Seller
way 1 = a[title="Become a Seller"][class="_3RX0a- _3jeYYh"]
way2 = [class="_3RX0a- _3jeYYh"]
way 3 =  ._3RX0a-._3jeYYh
*/


// parctice Example for travercing in webdriver university.com
// on Pagination 
//nav[aria-label="Page navigation example"] ul[class="pagination traversal-pagination"] li // it shows me 1 out of 7
// nav[aria-label="Page navigation example"]>ul[class="pagination traversal-pagination"]>li:nth-child(3) located for 2 page


// i verify for 	Andy in table of TBody
// div[class="thumbnail"] table[class="table table-light traversal-table"] tbody tr:nth-child(1)>td:nth-child(2)

 //  i verify for  Scott in table of Tbody
 //div[class="thumbnail"] table[class="table table-light traversal-table"] tbody tr:nth-child(3)>td:nth-child(3)

//  i verify for FIRST in table of Thead
// div[class="thumbnail"] table[class="table table-light traversal-table"] thead tr th:nth-child(2)

//  verify the table 1st with table no.1 
// Smith = div[class="thumbnail"] [id="t01"] tbody tr:nth-child(2) td:nth-child(2)

// verify the table 1st with table no.2
// firstname= div[class="thumbnail"] [id="t02"] tbody tr th:first-child

// verify the table 1st with table no.2
// 56 from table 2 in ages = div[class="thumbnail"] [id="t02"] tbody tr:nth-child(3) td:nth-child(3)

// selesct the locator for pagination oage no.2
// nav[aria-label="Page navigation example"] ul[class="pagination traversal-pagination"] li:nth-child(3) a:nth-child(1)

// travasal derinking list = 
//[class="traversal-drinks-list"] li:nth-child(2)

// veggies for broccoli
//ul[class="traversal-food-list"]>li:nth-child(9)