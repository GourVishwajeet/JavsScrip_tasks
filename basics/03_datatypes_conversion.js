let number = '33'
// console.log(typeof number)=>string

let updatedNumber= Number(number)
// console.log(typeof updatedNumber)->number


let invalidNumer ='33abc'
// console.log(typeof invalidNumer) =>string

let updatedInvalidnumber= Number(invalidNumer)
// console.log(updatedInvalidnumber)=>number
// console.log(typeof updatedInvalidnumber)=>NaN


let temperature = null
// console.log(temperature)=>null
let updatedTemprature = Number(null)
// console.log(updatedTemprature)=> 0
// console.log(typeof updatedTemprature)=> number


let undefinedNumber = undefined
// console.log(undefinedNumber)=> undefined
let updatedUndefinedNumber= Number(undefinedNumber)
// console.log(updatedUndefinedNumber)=>NaN


let isLoggedIN = 0
let boolLoggedIn = Boolean(isLoggedIN)
// console.log(isLoggedIN)====>0
// console.log(boolLoggedIn)====>true
// console.log(typeof boolLoggedIn)===>boolean

let score = 512
let updatedScore = String(score)
// console.log(updatedScore)===>512
// console.log(typeof updatedScore)===>string


// *************************Operetion********************************

let value= 35
let updatedValue= -value
// console.log(updatedValue)====> -35


/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**4)
console.log(2%4)
*/


let str1 = "vishi"
let str2 = " gour"

// console.log(str1 + str2)====> vishi gour

let sum= 100-85 + '5'+5
console.log(sum)
console.log(typeof(sum))


/*increament operator */

let a = 4;
let b = ++a;
console.log(a,b)
