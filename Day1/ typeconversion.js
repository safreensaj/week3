// 4.type convertion?
//two types
//Implicit(type coercion): it automatically converts types.....example: "5" + 1 = "51"
let result = "5"+2;    //"52" (string)
//Explicit:Developer manually converts types using functions....example: number("5")+1=6
let num = Number("5"); //5
let str = String(10);  //"10"
//Number() converts a value into a number type.
//If conversion fails, it returns NaN.
//Number() is used to convert other data types into number.
let a = Number("5");
let b = Number("10");
console.log(a + b); // 15
//Memory Tricks
//Number() → strict (pure number only)
//Letters present → NaN
//Empty string → 0
//true → 1, false → 0
//Number() wants the entire value to be numeric
//If even one letter exists → NaN
Number("5a")  // NaN
//parseInt() is a JavaScript function used to convert a string into a whole number (integer).
//It removes the decimal part and stops reading when it sees a non-number character.
parseInt("10")      // 10
parseInt("10.9")    // 10
parseInt("25")      // 25
//Decimal part is cut off, not rounded.
parseInt("px10")    // NaN
parseInt("abc")     // NaN
//First character must be a number.
parseInt("   30")   // 30
//Leading spaces are ignored.
parseInt("")        // NaN
//parseInt() → whole numbers only
//Cuts decimal part
//Reads until text appears
//First character must be a number
//parseFloat()
//String → Decimal number
parseFloat("10.75")  // 10.75
parseFloat("5.5kg")  // 5.5
//String Concatenation using +
"5" + 2   // "52"
"5" - 2   // 3
//works only with numbers
//"5" is converted to number automatically
//+ → concatenation if string exists
//- * / → numeric calculation

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