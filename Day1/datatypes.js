// 3.javascript datatypes?
//primitive (by value)
//String, number, boolean, null, undefined, bigint, symbol
let name = "sam";   //string
let age = 22;       //number
let isStudent=true; //boolean
 let num = null;
 let num1 
 //BigInt Example
//Used for very large numbers (bigger than normal number limit)
let big = 123456789012345678901234567890n;
console.log(big);
//Must end with n
10n + 20n  // 30n
10n + 5    // Error
//Symbol Example
//Symbol creates unique values
let id1 = Symbol("id");
let id2 = Symbol("id");
id1 === id2   // false
//Even same description → always unique


//non primitive (reference)
//object,array,function
let fruits = ["apple","banana"];    //array
let person = {name: "sam",age: 22};
function greet(){
    console.log("Good Morning");
}
greet()
let str = "javaScript";
let reverse = str.split("").reverse().join("");
console.log(reverse);
// let str = "hello";
// let reversed = str.split("").reverse().join("");
// console.log(reversed); // Output: "olleh"
