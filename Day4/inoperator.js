//in operator
//Check whether property exists in object
let person = {
  name: "Aisha",
  age: 20
};

console.log("name" in person); // true
console.log("city" in person); // false

let employee=[
    {id:11,salary:50000},
    {id:12,salary:65000}
]
console.log("name" in employee);