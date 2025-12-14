//javaScript operators
// Arithmetic: +, -, *, /, %
let x = 5;
let y = 2;
console.log(x+y) //7
console.log(x%y) //1
// comparison: >, <, ==, ===
console.log(5=="5"); //true
console.log(5==="5"); //false)
// logical: &&, ||, !
let a = true;
let b = false;
console.log(a && b); //false
console.log(a||b); //true
// ternary operator: condition ? valueiftrue : valuefalse
//Syntax: condition ? valueiftrue : valueiffalse
let age = 18;
let resul = (age>=18) ? "Adult" : "Minor"; //Adult
// typeof: to check datatype
let name = "sam";
let ag = 30
console.log(typeof name); //string
console.log(typeof ag) //number
// nullish: coalescing(??) returns right side only if left side is null or undefined
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); //"Guest"
//difference between || and ??
// ||:check for falsy values
// ??:checks only for null or undefined
//If left side is null or undefined → take right side
//Otherwise → take left side
console.log(0 || 10); //10
console.log(0 ?? 10)  //0
//difference between == and ===
// ==:checks value only(performs type conversion)
// ===:checks value and type both
