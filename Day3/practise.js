let arr = [5, 10, 15, 20];
const len=arr.length;
console.log(len)
const p=arr.push(25)
console.log(arr)
const s=arr.shift()
console.log(arr)
const sh=arr.shift()
console.log(arr)
const m=arr.map(n=>n*2)
console.log(m)
const f=arr.filter(n=>n>10)
console.log(f)
let numbers = [2, 5, 8, 11, 14];
let result=numbers.filter(num=>num%2==0).map(num=>num*2)
console.log(result)
let text = "javascript is easy";
let capitalText=text.charAt(0).toUpperCase()+text.slice(1)
console.log(capitalText)
let hasEasy=text.includes("easy")
console.log(hasEasy)
let length=text.length
console.log(length)
const num=[1,2,3]
let res=num.splice(0,2)
console.log(res)
function getFirstTwoElements(arr){
    return arr.splice(0,2)
}
const resul=getFirstTwoElements(num)
console.log(resul)


