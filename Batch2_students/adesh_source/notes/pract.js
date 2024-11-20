// without distrucring
 let arr=[1,2,3,4,5,6,7,8,9,,10];
let num1=arr[0];
let num2=arr[1];
let num3=arr[2];
let num4=arr[3];
let  num5=arr[4];
let  num6=arr[5];
let  num7=arr[6];
let  num8=arr[7];
let  num9=arr[8];
let  num10=arr[9];
let  num11=arr[10];
console.log(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
//distrucring 
let [number1,number2,number3,number4,number5]=arr
console.log(number1,number2,number3,number4,number5);
//distrucring with string array
let names=["adesh","mayur","nagnath","gauri"]
let[a1,a2,a3,a4]=names;
console.log(a1,a2,a3,a4);

//nested array
let subjest=[
           ["english","spanish","french","arbian"],
            ["marathi","hindi","tamil","kannada"]
        ];

  let [other,our]=subjest;
  console.log(other);
  console.log(our);     
  
  //skipin areas
  let color=[1,2,3,4,5];
  let[c1, , ,c4]=color;
  console.log(c1,c4);
  //adding value

  let hrr=[undefined,"adesh","amol"];
  let[num22="vaibhav",num23,num24]=hrr;
  console.log(num22,num23,num24);
  //loop with distrucring
  let statecapitalArray=[
     ["maharashtra","mumbai"],
     ["goa","panji"],
     ["bihar","patna"],
     ["asam","dispur"]
  ];
  for (let[state,capital] of statecapitalArray)
    console.log(`${state}: ${capital}`);
