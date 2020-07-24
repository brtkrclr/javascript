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

array.shift(); // Delete's first element
array.pop(); // Delete's last element

// Add new values to the beginning of the array
array.unshift("new", "values");

// Add new values to the end of the array
array.push("ending", "values");

// Splice can do anything remember
// splice( point, delete, add values... )
array.splice(2, 2, "new elemets", [], {}, 200, 300, function() {});


function name() {
    var fullname = "Berat Karacalar";

    function concat(name) {
        return "MR." + name;
    }

    return concat(fullname);
}

