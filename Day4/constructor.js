//Constructor Function
//What is Constructor Function?
//Used to create multiple objects
//Starts with Capital letter
//Use new keyword

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Anu", 25);
let p2 = new Person("Sara", 20);
console.log(p1);
console.log(p2);
//this.name → object property
//new → creates new object
function Student(name, mark) {
  this.name = name;
  this.mark = mark;
}

let s1 = new Student("Asha", 85);
let s2 = new Student("Rahul", 92);

console.log(s1);
console.log(s2);
