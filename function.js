// function myfunction(){
//     console.log("hello mukul");
// }
// myfunction();
// function myfunction(msg,n){
//     // parameter-.input
//     console.log(msg*n);
// }
// // not a number
// myfunction("hello sir",100);//argument 


// function sum(x,y){
//     // console.log(x+y);
//     console.log("before return");
// // console.log(x); 
//     s=x+y;
//     return s;
//     // console.log("after return");

// }
// let val=sum(3,4);
// // console.log(x); undefine

// console.log(val);


//sum function

// function sum(a,b){
//     return a+b;
// }

// // arrowfunction is called modern js 
// const x=5;

// const arrowSum=(a,b)=>{
//     // console.log(a+b);
//     return a+b;
// };

// //multiplication function 

//   function Mul(a,b){
//     return a*b;

//   }
//   const arrowmul=(a,b)=>{
//     // console.log(a*b);
//     return a*b;

//   }


// question 1:>cretae a function using the "function" keywords that talkes string as an argument & returns the number of values in the string .

        //  function countVowels(str){
        //     let count =0;
        //     // "mukul",count=2
        //     for (const char of str){
        //         // console.log(char);
        //         if(char ==="a" || char ==="e" || char==="i" ||char==="o"|| char==="u"){
        //             count++
        //         }
        //     }
        //     console.log(count);
        //     return count;
        // }

//questio 2:>cretae an arrow function to perform the same task .
// const countVow=(str)=>{
//             let count =0;
//             // "mukul",count=2
//             for (const char of str){
//                 // console.log(char);
//                 if(char ==="a" || char ==="e" || char==="i" ||char==="o"|| char==="u"){
//                     count++
//                 }
//             }
//             console.log(count);
//             return count;
//         }


//forEach loop in Array 
// let arr=[1,2,3,4,5,6];
// let arr=["mukul","rahul","mukesh"];

//    arr.forEach((val,idx,arr)=> {
//     console.log(val.toLocaleUpperCase(),idx,arr);
    
//    });



//question :> foe agiven array of number ,print the squaree of each value using the forEach loop.
// let num=[,3,4,5,2,1];
// num.forEach((num)=>{
//     console.log(num*num);//num**2

// })

// some more function in array(MAP):>
// let num=[3,4,5,2,1];
// let newArr=num.map((val)=>{
//     // console.log(val);
//     return val*2;

// })
// console.log(newArr);

//filter method
let arr=[34,56,44,32,6,7,,8];
let evenArr=arr.filter((val)=>{

    return val%2===0;
    

});
console.log(evenArr);
