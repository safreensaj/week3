//Memoization 

/*When we calculate something once,
we save that answer.
Next time, if we get the same question,
we don’t calculate again — we just remember and use the saved answer.
 Example in Real Life:

Imagine you ask your calculator:

You: “What’s 10 + 20?”
→ It says “30” (it had to calculate).

You ask again “What’s 10 + 20?”
→ It already knows the answer “30” (no need to calculate again).

That’s called Memoization — remembering old answers */


const student=[
    {name:"sam",grade:"Grade 5"},
    {name:"allen",grade:"Grade 6"},
    {name:"jasmine",grade:"Grade 5"},
    {name:"anu",grade:"Grade 6"}
]
let cache={}
function getStudentByclass(grade){
    console.log("finding students for",grade)
     if(cache[grade]){
            console.log("from cache");
            return cache[grade]
        }
    let result=[];
    for(i=0;i<student.length;i++){
        console.log("looking array");
        if(student[i].grade===grade){
            result.push(student[i])
        }
    }
    cache[grade]=result
    return result;
}
console.log(getStudentByclass("Grade 5"));
console.log(getStudentByclass("Grade 6"));
console.log(getStudentByclass("Grade 5"));
console.log(getStudentByclass("Grade 5"));
console.log(getStudentByclass("Grade 6"));
console.log(getStudentByclass("Grade 5"));


