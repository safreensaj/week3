//What is a String in JavaScript?
//A string is text data written inside quotes.
//Difference between single quotes ' ' and double quotes " "?
//No difference in JavaScript. Both work the same.
//Strings are immutable (cannot be changed).
//How do you find string length?
//Using .length property.
let result='javaScript'
console.log(result.length)
//Difference between slice() and substring()?
//slice() supports negative values
//substring() does not
//How to check if a string contains a word?
//Using includes().
console.log(result.includes('Script'))
//Difference between trim() and trimStart()?
//trim() removes space from both sides
//trimStart() removes space from start only
let name = "Anu";
console.log(name)
//String Property
name.length; // 3
//String Methods
//Methods to modify or check strings.
//How to convert string to number?
//Use Number(), parseInt(), or parseFloat().
let n=name.toUpperCase();  // ANU
console.log(n)
let l=name.toLowerCase()
console.log(l)
let b=name.includes("n"); // true
console.log(b)
let s=name.slice(0, 2); // An
console.log(s)
let word='programming'
console.log(word.slice(0,4))
let text = "   Hello World   ";
console.log(text.trim())
let email = "user@gmail.com";
console.log(email.includes('@'))
let str = "HELLO";
console.log(str.toLowerCase())
//Replace a Word
let line = "I like Java";
console.log(line.replace("Java", "JavaScript"));
//Check Starts With
let text2 = "JavaScript is easy";
console.log(text2.startsWith("JavaScript"));
//String methods original string change cheyyilla
// New string return cheyyum (immutable)






