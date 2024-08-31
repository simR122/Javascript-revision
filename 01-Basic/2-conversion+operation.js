let score = true 
// console.log(typeof score)

let scoreInNumber = Number(score)

// console.log(scoreInNumber)
// For what value of score it will give-

// "" => 0
// "20asd"=> NaN
// "bjf" => NaN
// true => 1

// CHECK FOR BOOLEAN 
let IsLoggedIn = ""

let BooleanIsLoggedIn = Boolean(IsLoggedIn)

// console.log(BooleanIsLoggedIn) 
// 0 => false 
// 34 => true 
// "str" => true
// "" => false



// CHECK FOR STRING
let variable = ""
let stringVariable = String(variable)

// console.log(stringVariable)
// console.log(typeof(stringVariable))

// "23" => String 23
//  23 => string 23

// "" => string blank**

// ##################OPERATIONS################################

// console.log(2 == 1)
// console.log(2 <= 1)
// console.log(2 >= 1)
// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null == 0); //In == opearator it doesn't covert and just check the equality
// console.log(null <= 0);
// console.log(null >= 0); //well in >, <, >= ,etc operator first do conversion and then check .....

// comparing different datatypes is not a good practice

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); //performs conversion 

