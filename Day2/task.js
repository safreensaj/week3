//Function Declaration
// Normal way of writing a function.You can call it anywhere (even before writing it)
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); 

//Function Expression

//Function stored inside a variable.
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 4)); 

//Arrow Function

//Short form of writing functions.
const square = (x) => x * x;
console.log(square(5)); 

//4) Anonymous Function

//Function without a name.Used inside another function.
setTimeout(function() {
  console.log("Hello!");
}, 1000);

//Named Function Expression

/*A function expression with a name.
//It means a function has a name, but it is stored inside a variable.
That name is used only inside the function (for example, when you want to call itself — recursion).*/
const sayHi = function greet() {
  console.log("Hello!");
};
sayHi();   

//Callback Function

//A function given to another function to run later.   
//Function inside another function.
//A callback function is a function that is passed as an argument to another function and is called later (or “called back”) inside that function.
function greet(name, callback) {
   console.log("Hello " + name);
   callback();
}
greet("Asha", function() {
  console.log("Welcome!");
 });

//First-Class Functions

//In JavaScript, functions are treated like normal values (like numbers or strings).
//You can store a function in a variable,
// pass it as an argument to another function,
//or return a function from another function.
// Function stored in a variable
function sayHi2() { return "Hi"; }

function call(fn) {
  console.log(fn());
}

call(sayHi2); // Hi

//Higher-Order Functions

/*Functions that take or return another function.
  Function works with another function.
  A Higher-Order Function is a function that takes another function as an argument
  or returns a function as its result.
  If a function accepts another function,
 or gives back another function,then it’s called a Higher-Order Function.*/
function repeatThreeTimes(action) {
  for (let i = 0; i < 3; i++) {
    action();  // calling the function we passed
  }
}
function sayHello1() {
  console.log("Hello!");
}
repeatThreeTimes(sayHello1);

//Factory Function

//Function that creates and returns objects.
// Function that makes objects.
function createPerson(name) {
  return {
    greet() {
      console.log("Hello, " + name);
    }
  };
}
const p = createPerson("Sam");
p.greet();

//Generator Function

//A Generator Function is a special type of function that can pause and continue later.
//It uses
//function* keyword (star symbol *)
//and the yield keyword to pause the function.

//Function Currying

//Currying means breaking a function with many argumentsinto many smaller functions,each taking one argument at a time.
// It’s like giving the arguments step by step.
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(add(2)(3)(4)); 

//Memoization 

/*When we calculate something once,
we save that answer.
Next time, if we get the same question,
we don’t calculate again — we just remember and use the saved answer.
 Example in Real Life:

Imagine you ask your calculator:

You: “What’s 10 + 20?”
→ It says “30” (it had to calculate).

You ask again “What’s 10 + 20?”
→ It already knows the answer “30” (no need to calculate again).

That’s called Memoization — remembering old answers */

/*Lexical Scope vs Dynamic Scope

Lexical scope: which variables are available is determined by the location of functions in source code (JS uses lexical scope).
Dynamic scope (not used by JS) would determine scope by the call stack at runtime.

 What is Lexical Scope?
 Lexical scope means —
a function can use variables written outside it (in its parent function or block).
 Think like this:
Inner function can see what’s outside it,
but outside function can’t see what’s inside.*/
function outer() {
  let name = "Safrin";

  function inner() {
    console.log(name); // can see 'name' from outer
  }
  inner();
}
outer();

