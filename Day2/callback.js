//What is a callback function?
//A callback is a function that is passed into another function and executed later.
function greet(name, callback) {
  callback(name);
}

greet("Asha", function(n) {
  console.log("Hello " + n);
});
