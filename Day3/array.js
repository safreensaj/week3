//Array is used to store multiple values in one variable.
let fruits = ["apple", "banana", "mango"];
console.log(fruits);
//Array Properties
//Properties give information about the array.
//Most important property :length
let len=fruits.length; // 3
console.log(len);
//Common Array Methods
//Methods are functions that work on arrays.
fruits.push("orange");   // add at end
console.log(fruits);
fruits.pop();            // remove last
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift(5);
console.log(fruits);

//Array Iteration Methods
let numbers = [10, 20, 30, 40];
//Iteration means looping through array items one by one.
numbers.forEach(item=>console.log(item));
//map()
//Create new array
let doubled = numbers.map(n => n * 2);
console.log(doubled);
//filter()
//Filter values
let big = numbers.filter(n => n > 20);
console.log(big);




