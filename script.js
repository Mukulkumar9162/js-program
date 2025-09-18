//this code is print hello world
// console.log("hellow world");
//airthmetic operators
// let a=5;
// let b=6;
// console.log("a=",a ,"$ b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);

// unary operator
// let a=5;
// let b=6;
// console.log("a=",a ,"$ b=",b);
//a=a+1; //6
// a++;
// a--;
// console.log("a=",a);//6
// console.log("++a=",a++);
// console.log("--a =",--a);
// console.log("a-- =",a--);
// console.log("a =",a);


//assigment operator
//  let a =5;
//  let b=2;

//  a+=4;  //a=a+4
//  a-=4;  //a=a-4
//  a*=4;  //a=a*4
//  a**=4;  //a=a**4



//  console.log("a=",a);//1


 //comparison ooperator
// let a=5; //number
//  let b=5;
// let b="5" //string
// console.log("5==3",a==b);//false
// console.log("5!=3",a!=b);//true
//  console.log("5==5",a==b);//true
//  console.log("5===5",a===b);//false because it strict 
// console.log("5<3",a<b);  //false
// console.log("5<=5",a<=b);  //true


//logical operator
// let a=6;
// let b=5;

// let cond1=a>b; //true
// let cond1=a<b; //false

// let cond2=a===6;//true
// let cond2=a===5;//false

// console.log("cond1&&cond2",cond1&&cond2);


// or|| operator

// let a=6;
// let b=5;

// console.log("cond1||cond2",a<b||a===6);
// console.log("!(6<5)",!(a<b));//false but give opsit true
// console.log("!(6<5)",!(a===6));//true and its give false


// conditional statements

// let age =25;
// let age =13;
// let mode ="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// }
// if (mode ==="light"){
//     color="white"
// }
// console.log(color)

// if(age >=18){
//     console.log("you can vote");
// }
// if (age<18){
//     console.log("you can't vote");
// }

//if esle statement
// let mode ="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// }
// else{
//     color="white"
// }
// console.log(color)

// let age =23;
// if (age>=18){
//     console.log("you can vote");

// }else{
//     console.log("you can't vote");
    
    
// }



// Q.1 odd and even check

// let num=15;
// if(num%2===0){
//     console.log(num," is even");

// }else{
//     console.log(num,"is odd");


// }

//else is statement

// let mode="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// }else if(mode==="blue"){
//     color="white";
// }else if(mode===pink){
//     color="pink";
// }else{
//     color="blue";
// }
// console.log(color);


// if (mode ==="dark") console.log(mode);//its not good method



//ternary operator :-condition?true output:falseoutput

// let age=23;
// let result=age>=18?"adult":"not adult";
// age>=18?console.log("adult"):console.log("not adult");
// age>=18?"adult":"not adult"; //simpler,compact,if-else


// console.log(result);
// let num = prompt("enter a number");

// if (num % 5===0){
//     console.log(num, "is multiple of 5");

// }else{
//     console.log(num,"is not multiple of 5");
    
// }

//qestion
// 2.write a code which can give grades to student according  to their scores:
// 1.(90-100,A) ,2.(70-89,b), 3.(60-69,c),4.(0-49,f)
// let score =prompt("enter your score(0-100):");
// // let score=75;
// let grade;
// if(score>=90 && score<=100){
//     grade="A"
//     // console.log(scores,"A")
// }else if(score>=70&&score<=89){
//     grade="b"
//     // console.log(scores,"b")
// }else if(score>=60&&score<=69){
//     grade="c"
// }else if(score>=0&&score<=49){
//     grade="f"
// }
// console.log("accourding to your score",grade);

//for loop
// for (let count=1;count<=10000;count++){
//     console.log("mukul");//5

// }
// console.log("loop has ended ")


// Q.1 calculate sum of 1 to 5
// let sum=0;
// let n=6;
// // let n=100;
// for (let i=1; i<=n; i++){

//     sum = sum+i;

// }
// console.log("sum=",sum);
// console.log("loop has ended");

//while loop    

// let i=1;
// while(i<=5){
//     console.log("i",i);
//     i++
// }


// let i=1;
// do{
//     console.log("i=",i);
//     i++
// }while(i<=5);



//for- of loop

// let str="mukul";
// let size=0;
// for(let i of str){
//     //itrator ->chracter
//     console.log(i);
//     size++
// }
// console.log("string size",size)


// for- in loop

// let student={
//     name:"mukul",
//     age:20,
//     cgpa:9.8,
// };
// for(let key in student){
//     console.log("key=",key,"vlaue",student[key]);
//     // console.log(i);

// }


// question1.print all even number form 0 to 100


// for(let i=0;i<=100;i++){
//     // console.log(i);
//     if(i%2===0){
//         console.log(i);
//     }else{

//     }
// }


// quwstion.2:> create a game you start with any random game number .ask the user to keep guessing the game until the enterect correct value

// let gameNum=25;

// let usernum=prompt("guess the number ");
// console.log(usernum);
// while(usernum!=gameNum){ //game

//     usernum=prompt("you enter the worng number ,guess again:");

// }
// console.log("congratulation ,you guess the right number ")



//string

// let str='mukulkuamr';
// console.log(str[7]);

// let obj={
//     item:'pen',
//     price:10,
// };
// let output=`the cost of ${obj.item}is ${obj.price} rupees`;
// console.log(output);


// console.log("the cost of ",obj.item,"is",obj.price,"rupess");

//template  literals
// let specialStirng=`this nis a template literal ${1+6+6}`;
// console.log ( specialStirng);
// console.log ( "mukul \n kumar");


// let str ='mukul';
//   str =str.toUpperCase();
//   console.log(str);
//   console.log(newstr);


//str.trim
// let str="      mukull               kumar";
// console.log(str.trim);
  

//str.slice

// let str="0123456789";
// console.log(str.slice(1,5));


//str.conact

// let str1="mukul";
// let str2="kumar"
// // let res=str1.concat(str2);
// let res=str1+str2;
// console.log(res)

//str.replace

// let str="hello";
// console.log(str.replace("h","y"));



//str.charAt(idx)


// let str="mukul";
// console.log(str.charAt(3));


//string question:-

//q:-prompt the user to enter their full name  .Generate a username for them on the input.strat username with @followed by their full 
// name and ending with the fullname length?

    //eg: user name="mukulkumar",username should be "@mukulkumar123"

    // let fullname=prompt("enter your name");
    // let username="@"+fullname+fullname.length;
    // console.log(username);



    //Arrays inn js

    // let marks=[34,46,56,45,45,45];
    // console.log(marks);
    // console.log(marks.length);//property


    // loopsm in js

    //for loopo

    // let heros=['mukul','rahul','hulk','spiderman','superman'];
    // //    for(let i=0;i<heros.length;i++){
    // //     console.log(heros[i]);
    // //    }

    //    //for of
    //    for(let hero of heros){
    //     console.log(hero);
    //    }

//question:- for agiven arrays 0f student of marks ->[56,67,56,45,54]find the avrage msrks of entire class

// let marks=[56,67,56,45,54];

// let sum=0;
// for(let val of marks){
//     // sum=sum+val;
//     sum+=val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

//question 2:- for a given arrays with prices of 5 item ->[250,635,300,900,50] all items have an offer of 10% on them.change arrays to store final price after applying offer ?

// let item=[250,635,300,900,50];

// let i=0;
// for(let val of item){
//     console.log(`value at index ${i}=${val}`);
//     let offer =val/10;
//     item[i]=item[i]-offer;
//     console.log(`value of after offer=${item[i]}`);
//     idx++;

// }
// for (let i=0;i<item.length;i++){
//     let offer =item[i]/10;
//     item[i]-=offer;
// }
// console.log(item);

//ARRAYS methods:-

// let fooditem=['potato','tomato','appel'];
// fooditem.push('chips','burger','loki');
// console.log(fooditem);
// console.log(fooditem.toString); 

// let name =['mukul', 'rohit','nikhil','rishu'];
//  let newname=['sunil','dipanshu'];

//  let names=
//  name.concat(newname);
//  console.log(names);



// let arr=[1,3,4,5,67,7]
// arr.splice(2,0,101,102)

//replace element
// arr.splice(3,1,101);


// question create an array to store companies ->"bloombreg ","microsoft","uber","ibm","google","netflix"

// 1.remove the first comapny from the array
// 2.remove the uber & add ola is it palce 
// 3/.add amazon at the end 

let companies=['bloomberg','microsoft','uber','ibm','google','netflix'];
    // companies.shift();
    // companies.splice(2,1,'ola');
   companies.push('amazon');

    
    























