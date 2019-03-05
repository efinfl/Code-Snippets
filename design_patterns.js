// ======================================== CREATIONAL PATTERNS ============================================

// ++++++++++ Objects Properties: 4 Ways: Direct, Adding to existing, Object.defineProperty, Object.defineProperties ++++++++++

// 1. Assign properties directly in the object
// ___PATTERN | object = {property: value};
myObject = {
  firstName: "Eric",
  lastName: "Figueroa"
};

// 2. Add properties into an existing object. The two below are interchangeable
// ___PATTERN | object.newProperty = "newValue"; or object.["newProperty"] = "newValue";
myObject.status = "is awesome";
myObject["status2"] = "No, I mean really awesome"; //bracket syntax must be in quotes and allows for spaces.

// 3. Three arguments: Object to add property to, property, property's value
// ___PATTERN | Object.defineProperty(objectEffected, "newProperty" {value: "valueName"});
Object.defineProperty(myObject, "look", {
  value: "handsome"
});

// 4. Can set multiple properties at once
// __PATTERN | Object.defineProperties(objectEffected, {"newProperty", {value: "valueName"}, "newProperty", {value: "valueName"}});
Object.defineProperties(myObject, {
  hairColor: {
    value: "brown"
  },

  eyeColor: {
    value: "dark brown"
  }
});

let first = myObject.firstName;
let last = myObject.lastName;
let status = myObject.status;
let status2 = myObject.status2;
let hair = myObject.hairColor;
let eyes = myObject.eyeColor;
let look = myObject.look;

console.log(
  first +
    " " +
    last +
    " " +
    status +
    ". " +
    status2 +
    " and is " +
    look +
    ". And has " +
    hair +
    " hair," +
    " and " +
    eyes +
    " eyes :)"
);

// ++++++++ Generating Objects with Object.create ++++++++++

let johnDoe = {
  firstName: "John",
  lastName: "Doe",
  sayName: function() {
    return "My name is " + this.firstName + " " + this.lastName; // ES6 syntax won't allow for use of "this"
  }
};
// Two arguments: object to be based on (prototype), reassignment or addition of properties
// All the propertied from JohnDoe will be carried over and...
let janeDoe = Object.create(johnDoe, {
  firstName: { value: "Jane" }, //firstName value will change
  greet: {
    //greeting will be aded
    value: function(person) {
      return "Hello " + person.firstName;
    }
  }
});
// Now, all the propertied from JaneDoe (which also have all the propertied of JohnDoe) will be carried over and...
let jimSmith = Object.create(janeDoe, {
  firstName: { value: "Jim" }, // firstName value will change
  lastName: { value: "Smith" } //lastName value will change
});

console.log(johnDoe.sayName());
console.log(janeDoe.sayName() + " " + janeDoe.greet(johnDoe));
console.log(jimSmith.sayName() + " " + jimSmith.greet(janeDoe));

// ___PATTERN | let object = {property: "Value"}
// ___PATTERN | let newObject = Object.create(objectToBeBasedOn, {propertyToAddOrChange: {value: "valueName"}})

// -------- Generating Objects with Object.create and add properties in *** EES 6: Most concise *** ---------

const aPerson = {
  isNice: false,
  greeting: function() {
    console.log(
      `My name is ${this.name}. Am I nice? ${this.isNice} and OMG! ${
        this.didItWork
      }`
    );
  }
};
// You can add a property to existing object
aPerson.didItWork = "It worked!";

// A new object is created which inherits all of "aPerson" properties and...
const me = Object.create(aPerson);
me.isNice = true; // changes existing value of isNice to true
me.name = "Eric"; //adds, name: "eric"

// A new object is created which inherits all of "me" properties and...
const you = Object.create(me);
you.name = "Jerry"; //changes name to Jerry

//since greeting value is a function that does console.log, no need to console.log again, just call the function
me.greeting();
you.greeting();

// ___PATTERN | const object = {property: "value"}
// ___PATTERN | objectEffected.propertyToChangeOrAdd = "value"
// ___PATTERN | const newObject = Object.create(objectToBeBasedOn)
//              newObject.propertyToChangeOrAdd = "value"

// ========================================  STRUCTURAL PATTERN ============================================

// ++++++++ Constructor Function ++++++++++

// Constructor functions serve to structure data into objects and don't actually output.
// Below, any data passed will get structured into the name and temp values.
function Beverage(name, temp) {
  this.name = name;
  this.temp = temp;
};
// This creates a method (drink) that receives the data from Beverage constructor 
Beverage.prototype.drink = function() {
  console.log(`I'm drinking ${this.name}`);
};
// creates another constructor for cofee that...
function Coffee(type) {
    Beverage.call(this, "coffee", "hot") // uses the name, temp of Beverage to pass "coffee", "hot"
    this.type = type; // and adds a property of type
}

// Make a new object that uses Coffee as a prototype and also equals Beverage as a prototype
// This chains both constructors properties
Coffee.prototype = Object.create(Beverage.prototype)

//This creates a method that receives data from combined constructors above
Coffee.prototype.sip = function () {
    console.log(`Sipping some nice ${this.type} ${this.temp} ${this.name}`)
}

//This creates a new Beverage object with "water", "cold" passed to it
let water = new Beverage("water", "cold");

//This creates a new Coffee object with "dark" passed to it
let coffee = new Coffee("dark")

// Take the new Beverage object(water) then has the drink method executed on it
water.drink();

// Takes the new Coffee object(coffee) then has the sip method executed ont it
coffee.sip()
