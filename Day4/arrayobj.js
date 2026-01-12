//Arrays of Objects & Nested Structures
//Array of Objects
let students = [
  { name: "Anu", age: 20 },
  { name: "Ravi", age: 22 }
];

console.log(students[0].name);

//Array inside Object

let user = {
  name: "Neha",
  skills: ["HTML", "CSS", "JS"]
};

console.log(user.skills[1]);

//Nested Objects

let company = {
  name: "Supreme",
  address: {
    city: "Kannur",
    pincode: 123456
  }
};

console.log(company.address.city);

let employees=[
    {id:1,salary:25000},
    {id:2,salary:30000},
    {id:3,salary:29000}
]
console.log(employees[1].salary)

