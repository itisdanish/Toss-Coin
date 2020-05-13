const ary = ["Apple",1,2,8,5,5.1,4.9,"Orrange",{color:"red",Size:"Big"},"Danish"]
const ary1 = ["new","12new"]
console.log(ary)
ary.sort()
ary.push("Ardent")
const newAry = ary.concat(ary1)
console.log(newAry)

let fo = newAry.find(function(el)
{
    console.log(el)
    return el>8;
})
console.log(fo)