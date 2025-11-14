function add(a){
return function(b){
    return function(c){
        return a+b+c;
    }
}
}
const sum=add(1)(4)(10)
console.log(sum)
//same code in arrow fn
const add=a=>b=>c=>a+b+c
const sum1=add(1)(4)(10)
console.log(sum1)