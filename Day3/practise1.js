//task1
let arr=[1,2,3,4,5];
console.log(arr.length); 
console.log(arr[arr.length-1]); 

//task2
let colors=["red","yellow","blue"];
console.log(colors.push("pink"));
console.log(colors);
console.log(colors.shift("red"));
console.log(colors);
console.log(colors.includes("red"));
console.log(colors.indexOf("blue"));
//task3
let numbers=[2,4,6,8];
let result=numbers.map(num=>num*2);
console.log(result);
console.log(numbers.filter(num=>num>5));
let sum=numbers.reduce((total,num)=>total+num,0);
console.log(sum);
numbers.forEach((numbers)=>console.log(numbers));
//task4
let name="Anupama";
console.log(name.length);
console.log(name[name.length-1]);
//task5
console.log(name.toupperCase);
console.log(name.includes("js"));
console.log(name.slice(0,3));
console.log(name.trim());
let text="i love javascript";
console.log(text.replace("javascript","html"))
//task6
let greet="hello anu";
let greetPattern=/hello/;
console.log(greetPattern.test(greet));
let mobile=9544066845;
let mobilePattern=/^\d{10}$/;
console.log(mobilePattern.test(mobile));
let email="safrinesaj@gmail.com";
let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test(email));
let str="hello123";
let strPattern=/\d/;
console.log(strPattern.test(str));
let arrliteral=["apple","mango","orange"];
console.log(arrliteral);
let objliteral={
    name:"anu",
    isstusent:"yes"
};
console.log(objliteral);
console.log(`welcome ${name}`);
let a=2;
let b=3;
console.log(a+b);