//*************************datatyeps *************************************************************

let name = 'vishi'
let number= 2
let isLogin = true
let temperature = null

//**********Premtives*************/
// number 2 to the power of 53 >
// bigint
// string
// boolean=>true/false
// null
// undefined 
// symbol =>uniqueness

/****************Non Premitives***********/

//Objects
// console.log(typeof temperature)==>object


    // datatypes====>two types
    //     ||
    //   __||__
//       \    /
//        \  /
//         \/
// 1.primitives===>
/*
 1.String
 2.Number
 3.Boolean
 4.Symbol
 5.Bigint
 6.null
 7.undefined

*/

// 2.nonPrimitives(reference)
// 1.Array 2. Object 3. Function    



const  myFunction=function() {
     console.log("this is a function")
}

myFunction();
console.log(typeof myFunction)

const myArray =['arrya1','array2','array3','array4']

const myObject={
   myName :'vishi',
   myAge: 24,
}

console.log(typeof myObject)


/* memory Types===> two types
1. Stack ==>primitives:It makes copy of original variable adn changes the copied variable.
2. Heap  ==>Non-Primitives(reference):It changes the original object.
*/
//example:stack===>

    let name1 = 'varun';
    let name2 = name1

    name2 ='abhishek'

    // console.log(name1)===>varun
    // console.log(name2)===>abhishek


 let  obj1={
        class:8,
        sec:'b'
    };
     obj1.class=9
     obj1.sec='c'

     console.log(obj1)
     console.log(typeof obj1)

    

