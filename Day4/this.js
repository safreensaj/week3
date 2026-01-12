//this keyword
//What is this?
//this refers to current object

let user = {
  name: "Fathima",
  showName() {
    console.log(this.name);
  }
};

user.showName();

//call(), apply(), bind()
//call()
//Function call cheyyumbo this manually set cheyyam

function showCity(city) {
  console.log(this.name + " lives in " + city);
}

let user1 = { name: "Ameen" };

showCity.call(user, "Kochi");

//apply()
//Same as call
//Arguments array aayi pass cheyyum

showCity.apply(user, ["Calicut"]);

//bind()
//New function return cheyyum

let newFunc = showCity.bind(user, "Trivandrum");
newFunc();

//call → direct call
//apply → arguments array
//bind → later call cheyyan function return