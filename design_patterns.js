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
// ___PATTERN | let newObject = Object.create(prototypeObject, {propertyToAddOrChange: {value: "valueName"}})

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

// ========================================  STRUCTURAL PATTERN ============================================
