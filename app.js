//functions
function makeCoffee(sugar, milk) {
    var instruction = "Boil water, ";
    instruction += "pour into cup, ";
    instruction += "add " + sugar + " spoons of sugar, ";
    instruction += "add " + milk + "cup of milk.";
    return instruction;
}

//objects
var car = {
    color: "red",
    speed: 200,
    brand: "audi",
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "gas",
    },
    drive: function() { return "drive"; }

}

//array
var shoppinglist = [
    "apple",
    "milk",
    "juice"
];

console.log(car.make)