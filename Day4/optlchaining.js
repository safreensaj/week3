//Optional Chaining ?.
//Error varathe safe access cheyyan
//Property illenkil undefined return cheyyum
let user = {
  name: "Zara",
  age: 21
};
console.log("name" in user); // true
console.log(user.address?.city);
//Property illa enkil error varathe undefined return cheyyum.

let Student={
    name:"nisha",
    address:{
        city:"kochi"
    }
}
console.log(Student.address?.city);
console.log(Student.contact?.phone);