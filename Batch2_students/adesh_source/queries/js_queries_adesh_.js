//number
let a= 55
console.log(a);
//2
let b=44
console.log(b);
//3
let c=40
console.log(c);
//4
let d=11
console.log(d);
//5
let e=47
console.log(e);
//6
let f=41
console.log(f);

//7
let g=479
console.log(g);
//8
let h=58
console.log(h);
//9
let i=58
console.log(i);
//10
let j=77
console.log(j);
//round method

let aa= 0.1
let aa2 = 0.2
let aa3 = 0.3
let aa4 = 0.4
let aa5= 0.5
let aa6 = 0.6
let aa7=0.2
let aa8=0.9
let aa9=0.1
let aa10=1.8
console.log(Math.round(aa));
console.log(Math.round(aa2));
console.log(Math.round(aa3));
console.log(Math.round(aa4));
console.log(Math.round(aa5));
console.log(Math.round(aa6));
console.log(Math.round(aa7));
console.log(Math.round(aa8));
console.log(Math.round(aa9));
console.log(Math.round(aa10));

//ceil
console.log(Math.ceil(aa));
console.log(Math.ceil(aa2));
console.log(Math.ceil(aa3));
console.log(Math.ceil(aa4));
console.log(Math.ceil(aa5));
console.log(Math.ceil(aa6));
console.log(Math.ceil(aa7));
console.log(Math.ceil(aa8));
console.log(Math.ceil(aa9));
console.log(Math.ceil(aa10));
//floor
let ad= 6.8
let ad2 = 5.0
let ad3 = 5.9
let ad4 = 2.8
let ad5= 0.5
let ad6 = 0.6
let ad7=0.2
let ad8=0.9
let ad9=0.1
let ad10=5.9

console.log(Math.ceil(ad));
console.log(Math.ceil(ad2));
console.log(Math.ceil(ad3));
console.log(Math.ceil(ad4));
console.log(Math.ceil(ad5));
console.log(Math.ceil(ad6));
console.log(Math.ceil(ad7));
console.log(Math.ceil(ad8));
console.log(Math.ceil(ad9));
console.log(Math.ceil(ad10));


// random
console.log(Math.random(ad));
console.log(Math.random(ad2));
console.log(Math.random(ad3));
console.log(Math.random(ad4));
console.log(Math.random(ad5));
console.log(Math.random(ad6));
console.log(Math.random(ad7));
console.log(Math.random(ad8));
console.log(Math.random(ad9));
console.log(Math.random(ad10));

// strings
let firstname="Adesh"
let middlename="Vyankat"
let lastname="Devkar"
let spechar='@@$$@%%'
let char="true"
let f1='xyzsertgbhyh'
let f2='how are you'
console.log(typeof firstname);
console.log(typeof middlename);
console.log(typeof lastname);
console.log(typeof spechar);
console.log(typeof char);
console.log(typeof f1)
console.log(typeof f2)
//strings methos

let example='javascript is easy and scripted language';

console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());
console.log(example.toUpperCase());

//zero based indexing
let avd='adesh'
let vpd='vyankat'
let dav='devkar'
let psd='pandurang'
let sbd='sandesh'
let rbd ='ritesh'
let pvd='pranjali'
let dsb='sayli'
let svd='sunita'
let bpd='balaji'

console.log(avd[4]);
console.log(vpd[6]);
console.log(dav[3]);
console.log(psd[5]);
console.log(sbd[2]);
console.log(rbd[5]);
console.log(pvd[1]);
console.log(dsb[4]);
console.log(svd[6]);
console.log(bpd[5]);

//substr
let str1='how are you'
console.log(str1.substr(4,4));
let str2='i am fine';
console.log(str2.substr(4,3))
let str3='hello world'
console.log(str3.substr(7,5));
let str4='javascript is easy language'
console.log(str4.substr(0,11));
let str5='what is this'
console.log(str5.substr(5,3));
let str6='learnig javascript'
console.log(str6.substr(9));
let str7='hello'
console.log(str7.substr(0,5));
let str8='javacript'
console.log(str8.substr(0,8));
let str9='hi ok'                                                                                          
console.log(str9.substr(0,2));
let str10='nothing but possible'
console.log(str10.substr(8,3));
//substring

let str11='hello world'
console.log(str11.substring(0,5));

let str12='javascript'
console.log(str11.substring(4,10));

let str13='python'
console.log(str13.substring(5,2));

let str15='jayshriramk'
console.log(str15.substring(3,5));

let str18='substring'
console.log(str18.substring(11));

//split

let ad1='adesh vyanakt devkar'
console.log(ad1.split(" "));
 console.log(ad1.split('a'));
 console.log(ad1.split('      '));
 console.log(ad1.split('r'));

 //trim()

 let ad0="        adesh     ";
 console.log(ad0.trim().length);

 let ad11='sewanivrutti   '
 console.log(ad11.trim().length);
console.log(ad11.trimEnd());

//incudes true or false
let ad12='i am perfect in gaming of inrediable jack'
console .log(ad12.includes('am'));

console.log(ad12.includes('in'));
console.log(ad12.includes('jack'));
console.log(ad12.includes('ok'));
console.log(ad12.includes('per'));
console.log(ad12.includes('i'));
console.log(ad12.includes('of'));
console.log(ad12.includes('in'));

//replace()
let ad13='i am iligible from today session'
console.log(ad13.replace('am','os'));
console.log(ad13.replace('d','s'));
console.log(ad13.replace('b','o'));
console.log(ad13.replace('s','n'));
console.log(ad13.replace('b','c'));
console.log(ad13.replace('n','e'));
console.log(ad13.replace('g','e'));
console.log(ad13.replace('b','n'));
console.log(ad13.replace('s','e'));

//repeat
let ad33='adiii'
let ad34='devkar'
let ad332='summercamp'
let eq='holiday'
let gg='one'
let hi='wow'
let hfg='good way'
let ght='hiiiiii'
let n='sure'
let q='shriram'
console.log(ad33.repeat(10));
console.log(ad34.repeat(10));
console.log(ad332.repeat(8));
console.log(eq.repeat(55));
console.log(gg.repeat(10));
console.log(hi.repeat(60));
console.log(hfg.repeat(77));
console.log(ght.repeat(20));
console.log(n.repeat(10));
console.log(q.repeat(50));


//match
let s= 'i live in Barshi,dist,solapur.'
console.log(s.match('live'));
console.log(s.match('in'));
console.log(s.match('dist'));
console.log(s.match('bar'));
console.log(s.match('li'));
console.log(s.match('ve'));
console.log(s.match('i'));
console.log(s.match('shi'));
console.log(s.match('solapur'));
console.log(s.match('so'));

//conversion string to number

let str = "100";
let num1 = Number(str);
console.log(num1); 

let str0 = "200";
let num2 = parseInt(str0);
console.log(num2);

let str21 = "300";
let num3 = parseInt(str21);
console.log(typeof num3);

let str22 = "400";
let num4 = parseInt(str22);
console.log(num4);

let str23 = "0032";
let num5 = parseInt(str23);
console.log(num5); 

let abc="123"
let abc2= parseInt(abc);
console.log(abc2);

let abc3='234'
let abc4=parseInt(abc3);
console.log(abc4);

let abc5='254'
let abc6=parseInt(abc5);
console.log(abc6);

let abc7='234'
let abc8=parseInt(abc7);
console.log(typeof abc8);

//number to strings

let h1=123;
console.log(typeof h1.toString());

let h2=156;
console.log(h2.toString());

let h3=656;
console.log(h3.toString());

let h4=6666;
console.log(h4.toString());

let h5=45;
console.log(h5.toString());

let h6=156;
console.log(h6.toString());

let h7=156;
console.log(h7.toString());

let h8=76;
console.log(h8.toString());

let h9=13;
console.log(h9.toString());

let h10=6666;
console.log(typeof h10.toString());

// boolean
let iamadesh=true;
console.log(iamadesh);
//&&
let isvalid=true&&true;
console.log(isvalid);
//||
let iamlearnjava=true||false;
console.log(iamlearnjava);
//not!
let iamlearnjava1=!false;
console.log(iamlearnjava);

let iamlearnjava2=!true;
console.log(iamlearnjava2);

let isTrue = Boolean("hello");
console.log(isTrue);

let isFalse = Boolean("");  
console.log(isTrue); 

let isTrueNumber = Boolean(42); 
console.log(isTrueNumber); 

let isFalseNumber = Boolean(0); 
console.log(isFalseNumber); 

//operators's

//arithmatic

let v1=5+7;
console.log(v1);

let v2=5-2;
console.log(v2);

let v3=9*50;
console.log(v3);

let v4=50/5;
console.log(v4);

let v5=8**3;
console.log(v5);

let v6=35;
let v7=7;
let remainder=v6&v7;
console.log(remainder);

let v8=56;
let v9=9;
let rem=v8%v9;
console.log(rem);

let v10=5**6;
console.log(v10);

let v11=500+500;
console.log(v11);

let b3=55*55;
console.log(b3);

// logical

let x =9;
let y=6;

console.log(x>y&&y<x);

let x1=10;
let y1=50;

console.log(x1<y1||y1>x1);

let xx=5;
let yy=2;
console.log(!xx>yy,yy<xx);

let istrue=true;
console.log(!istrue);

let active=false;
console.log(!active);

let adesh=true;
let devkar=false;
console.log(a||b);

let num=0;
let num29=5;
console.log(num||num29);

// increament // decmt

let vv=44;
console.log(vv++);
console.log(vv);

let vvv=44;
console.log(vvv++);
console.log(vvv);

let vv1=66;
console.log(vv1++);
console.log(vv1);

let vv2=55;
console.log(vv2++);
console.log(vv2);

let vv3=22;
console.log(vv3++);
console.log(vv3);

//dec
let vv0=44;
console.log(vv0--);
console.log(vv0);

let vv01=44;
console.log(vv01--);
console.log(vv01);

let vv02=66;
console.log(vv02--);
console.log(vv02);

let vv03=55;
console.log(vv03--);
console.log(vv03);

let vv04=22;
console.log(vv04--);
console.log(vv04);

// ternary

let day = "monday";
day=== "monday"
    ? console.log("Carry uniform.")
    : console.log("Do not carry uniform.");

    let age=25;
    let status=age>=18 ?"adult" :"minor";
    console.log(status);

    let marks=100;
    let remarks=marks<=70 ?"good":"ok";
    console.log(remarks);

    let name ='ok'
    let answer=name==="adesh"?'right':"wrong";
    console.log(answer);

    let score=720;
    let grade=score>=620?"pass":"fail";
    console.log(grade);

    let score1=720;
    let grade1=score1<=620?"pass":"fail";
    console.log(grade1);

    let lastname1 ='devkar'
    let answer2=lastname1==="adesh"?'true':"false";
    console.log(answer2);

    let c1=10;
    let c2=5;
    let right=c1>=c2?"click":"unclick";
    console.log(right);

    let c8=10;
    let c9=5;
    let right1=c8<=c9?"click":"unclick";
    console.log(right1);


    //date

    let currentdate=new Date();
    console.log(currentdate);

    let specdate=new Date(14-5-2003);
    console.log(specdate);

    let date=new Date();
    let year=date.getFullYear();
    let monnth=date.getMonth();+1;
    let day1= date.getDate();
    console.log(year,monnth,day);

    let date1 = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours, minutes, seconds);


// condition's

// 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 1-5

for(let i=1;i<=5;i++){
    console.log(i);
}
// even number 2-10
for(let i=2;i<=10;i+=2){
    console.log(i);
}

//odd


for(let i=1;i<=19;i+=2){
    console.log(i);
}


/*
*
**
***
****
*****
*/
for(let i=1;i<=5;i++){
    console.log("*".repeat(i));

}


for(let i =1;i<=7;i++){
    console.log("#".repeat(i));

}
