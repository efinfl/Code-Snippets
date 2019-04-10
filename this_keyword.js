// ========================================= this keyword =========================================

// ========== When a method is part of an object, "this" refers the the object that owns the method
const person = {
  first: "Larry",
  last: "David",
  name() {
    console.log(this); // This refers to the object "person"
    console.log("==============================");
  }
};
person.name();
// Returns the parent object "person": { first: 'Larry', last: 'David', name: [Function: name] }

// ========== In a stand-alone function "this" refers to the Window/Global(in Node) object
function myFunction() {
  console.log(this);
  console.log("==============================");
}
// myFunction()
// Returns Window/Global(Node) object: Too long to show here.

// ========== In a Constructor function, "this" will refer to the new Object
function AnotherPerson(first, last) {
  (this.first = first), (this.last = last);

  console.log(this);
  // Returns: AnotherPerson { first: 'Dan', last: 'Smith' } and AnotherPerson { first: 'Sally', last: 'May' }
  console.log("==============================");
}

const danSmith = new AnotherPerson("Dan", "Smith");
const sallyMay = new AnotherPerson("Sally", "May");

// ========== Function in a Method in an Object

const yetAnotherPerson = {
  first: "Joe",
  traits: ["kind", "smart", "funny"],
  showTraits() {
    // If "this" is inside of a regular function (and not a method), this will refer to the Window/Global object
    // Even if it's inside of an object
    // In this case, forEach takes two arguments. The second arg can take "this"
    // which refers to the method's parent object, giving access to that object in the regular function
    this.traits.forEach(function(traits) {
      console.log(this.first + " is", traits);
    }, this);
    //                                                 ^____<______<____<______<_____^
    console.log("==============================");
  }
};
yetAnotherPerson.showTraits();
// Returns: Joe is kind
//          Joe is smart
//          Joe is funny

// ========== CAUTION, CAUTION ES6: "this" does not bind to parent object with arrow functions. You must manually bind it.
// Avoid arrow functions with constructors
const AnotherPerson2 = (first, last) => {
  (this.first = first), (this.last = last);

  console.log(this);
  // Returns: Error: "AnotherPerson2 is not a constructor" because "this" is referring to the Window/Global Object
};

// let ladyGaga = new AnotherPerson2("lady", "Gaga");
