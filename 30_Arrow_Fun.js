let x = prompt("May I Know Your Name :")
function ready(x)
{
let p = `HiFunction !! ${x*50},`
console.log(p)
}
ready(x)

//Arrow Function :

const r = (x) => 
{
    let a = `Hi Arrow !! ${x*100},`
    console.log(a)
}
r(x)