//Generator Function

//A Generator Function is a special type of function that can pause and continue later.
//It uses
//function* keyword (star symbol *)
//and the yield keyword to pause the function.


function* generator(){
    console.log("hii i am generator function");
    yield 1
}
const obj=generator()
console.log(obj.next())
console.log(obj.next())


function* infiniteCounter(){
    let count=1;
    while(true){
        yield count++;
    }
}
const counter=infiniteCounter()
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())