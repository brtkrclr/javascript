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

console.log(car.make);

function name() {
    var fullname = "Berat Karacalar";

    function concat(name) {
        return "MR." + name;
    }

    return concat(fullname);
}
///////////////////////////////////////
console.log(myName, printName());

var myName = "Berat";

function printName() {
    return "Karacalar";
}
//scope
var engine = {
    maker: "Ford",
    headGAsket: {
        pots: [
            "piston1",
            "piston2"
        ]
    }
}

//constructive function

function Apple(x, y, color, score) {
    this.color = color;
    this.score = score;
    this.x = x;
    this.y = y;
}
new Apple(12, 56, "red", 200);


//if statements.
var carsLeft = 1,
    carsRight = 0,
    greenMan = "yes";

if (greenMan === "yes") {
    console.log('cross the road');
} else if (greenMan === "yes" && (carsLeft === 0 || carsRight === 0)) {
    console.log('All clear! Cross the road');
} else {
    console.log("Stay where you are!");
}

//for loops

var classRegister = ["Lawrence", "John", "Jeff"];
for (var i = 0; i < classRegister.length; i++) {
    console.log(classRegister[i])

}

//or

for (var index in classRegister) {
    console.log(classRegister[index])
}

/*
Eckman body is the one that controls the standards for the language and they also bring out new versions of the language
*/

//ECMA6 Part
var symbolName = "value reference in memory";
let letSymbol = "scoped value";
const symName = "constand value in memory"; //cannot assign a new value to constant.
