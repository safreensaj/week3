//Array Iteration Methods
let numbers = [10,15,20,25,30,35,40];
//Iteration means looping through array items one by one.
//forEach()-Runs a function on each element(no return value)
numbers.forEach(item=>console.log(item));
//map()-Runs a function on each element and returns a new transformed array
//Create new array
let doubled = numbers.map(n => n * 2);
console.log('map',doubled);
//filter()-Runs a function and returns a new array of elements that passed the condition
//Filter values
let big = numbers.filter(n => n > 20);
console.log('filter',big);
//find()-Returns the first element that matches the condition
let fin = numbers.find(n => n > 20);
console.log('find',fin);
//findIndex()-Returns the index of the first element that matches
let finInd = numbers.findIndex(n => n > 20);
console.log('findIndex',finInd);
//some()-Returns true if any element matches the condition
let som = numbers.some(n => n > 20);
console.log('some',som);
//every()-Returns true if all elements match the condition
let eve = numbers.every(n => n > 20);
console.log('every',eve);
//reduce()-Runs a function and reduces all elements into one final value
let redc = numbers.reduce((a,v)=>a+v);
console.log('reduce',redc);