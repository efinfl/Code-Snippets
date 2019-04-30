/*  Classes can be thought of templates that encapsulate the data and 
functions needed to create new instances of an object */

/* Here we'll create a class called Mammal that will contain all the data and 
function needed to create an object called fluff */

// ~~~~~~~~ Constructors, Methods ~~~~~~~~ //

// Class names start with ** uppercase letter
class Mammal {
  constructor(sound, greet) {
    // classes start with a // - constructor function - //
    this.sound = sound; // ----- this keyword ----- // refers to what ever new object is being created from this class
    this.greet = greet;
  }

  // you can also run // -------- methods ------- //
  talk() {
    return this.sound + " " + this.greet;
  }
}

let fluff = new Mammal("Woof!", "Sup!"); // "Woof" and "Sup!" get passed in as sound and greet and creates a new object with "Woof" and "Sup!" value
console.log(fluff.sound);

let fluffTalk = fluff.talk(); // you can invoke the method by assigning it a variable
console.log(fluffTalk);

// ~~~~~~~~~~~~~ Inheritance ~~~~~~~~~~~~~ //

/* You can also create a new object form a class by extending it. The new object cna contain the values ("Arf!" and "Yo!") 
to pass into the inherited constructor */
class Dog extends Mammal {
  constructor() {
    super("Arf!", "Yo!"); // super keyword calls the constructor of the inherited class (Mammal)
  }
}
// assign doggo to be the new Dog object
let doggo = new Dog();
console.log(doggo);

let doggoTalk = doggo.talk();
console.log(doggo.greet);
console.log(doggoTalk);
