//What is an Object?
//An object is a collection of key–value pairs.
//An object stores data in key : value pairs
//Used to represent real-world things
//Key = property name, Value = property value.
let person = {
  name: "Aisha",
  age: 22,
  city: "Kochi"
};

//Difference between property and method?
//Property → value
//Method → function

let user3 = {
  name: "Sara",     // property
  greet() {         // method
    console.log("Hi");
  }
};

//What is a Method?
//Function inside an object is called a method
let user = {
  name: "Rahul",
  greet: function () {
    console.log("Hello!");
  }
};

user.greet();

//Shorthand Method Syntax
//ES6 shortcut way to write methods
//function keyword venda

//Old way:
let user1 = {
  sayHi: function () {
    console.log("Hi");
  }
};
//Shorthand way:
let user2 = {
  sayHi() {
    console.log("Hi");
  }
};
user2.sayHi()
//function keyword remove cheyth simple aayi ezhutham.
let car={
    Brand:"bmw",
    Model:"2021",
    Start(){
     console.log("Car Started")
    }
}
car.Start()