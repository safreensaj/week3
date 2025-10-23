// 4.type convertion?
//Implicit(type coercion): it automatically converts types.....example: "5" + 1 = "51"
let result = "5"+2;    //"52" (string)
//Explicit:Developer manually converts types using functions....example: number("5")+1=6
let num = Number("5"); //5
let str = String(10);  //"10"
//5.Falsy values in js
//values considerd false in boolean 
//context:false, 0, " " (empty String), null, undefined, NaN
if(0){
    console.log("True");
}else{
    console.log("False");  //run
}

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
console.log(0 || 10); //10
console.log(0 ?? 10)  //0
//difference between == and ===
// ==:checks value only(performs type conversion)
// ===:checks value and type both

// 7.conditional statements?
// used for decision making...if, else, if, else, switch
let total = 95;
if(total>=90){
    console.log("Excellent");
}else{
    console.log("moderate")
}
//if-else if-else
let marks =75;
if(marks>=90){
    console.log("A Grade");
}else if(marks>=75){
    console.log("B Grade");
}else{
    console.log("C Grade");
}
//switch statement
let color = "red";
switch(color){
    case "red":
        console.log("Stop!");
        break;
    case "green":
        console.log("Go!"); 
        break;
    default:
        console.log("Invalid color");      
}
// 8.Loops
// To repeat code multiple times.....for, while, do...while, for...of, for...in
//for loop
for(let i=1;i<=5;i++){
    console.log("Count:",i);
}
//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
//do while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=3);
//for...of
let fruits = ["apple","mango","banana"];
for(f of fruits){
    console.log(f);
}
//for..in
let person = {name: "sam",age:22};
for(let key in person){
    console.log(key + ": "+ person[key]);
}