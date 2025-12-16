//Lexical Scope(JavaScript uses this)
//Scope is decided by where the function is written
let x=10;
function outer(){
    let x=20;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();
//Dynamic Scope
//Scope decided by how function is called(Javascript does not support this)