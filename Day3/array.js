//What is an array? Write one example.
//Array is a collection of multiple values in a single variable.
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

//push()-Adds one or more values to the end of the array and returns the new length
fruits.push("orange");   // add at end
console.log('After push',fruits);
//pop()-Removes the one value from the end of the array and returns that removed value
fruits.pop();            // remove last
console.log('After pop',fruits);
//shift()-Removes the value from the starts of the array and returns that removed value
fruits.shift();
console.log('After shift method',fruits);
//unshift()-Adds one or more values to the biginning of the array and returns to the new length
fruits.unshift(5);
console.log('After unshift',fruits);
//includes()-Checks if a value exists in the array and returns true or false
let include=fruits.includes("chikku")
console.log('After includes',include)
//indexOf()-Returns the index of a value or -1 if not found
let ind=fruits.indexOf("banana")
console.log('After indexOf',ind)
//slice()-Returns a new array by copying selected elements (does not modify original)
const fruit=fruits.slice(0,2)
console.log('After slice ',fruit)
//splice()-Adds,removes, or replaces elements and returns the removed items(modifies original)
const spl=fruits.splice(1,2,'watermelon','papaya','kiwi')
console.log('After splice removed items',spl)//This prints removed items
console.log('After splice updated array',fruits)//This prints updated array
//concat() -joins arrays and returns a new combined array
let veg = ["tomatto", "potato", "chilly"];
const newarray=fruits.concat(veg)
console.log('After concat',newarray)
//join()-Converts the array into a string with a chosen separator
let str=fruits.join('*')
console.log('After join method', str)
//reverse()-Reverses the array in place and returns the modified array
console.log('After reverse',fruits.reverse())
//sort()-Sorts the array in place and returns the modified array
console.log('After sort',fruits.sort((a,b)=>(b-a)))







