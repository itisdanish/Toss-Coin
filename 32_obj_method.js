x=prompt("Brand")
y=prompt("color")
var car =
{
    brand:x,
    color : y,
    speed : "120 km/h",
    turnOn : function()
    {
        console.log("Engine on")
    },
    status()
    {
        let c = `Your are Driving ${this.color} ${this.brand} at the speed of ${this.speed}`
        console.log(c)
    }
};