// ~~~~~~~ Quick talk about "this" ~~~~~~~ //

// keyword this is referring what ever it's taking action on
// in this case it's the global object because
// that's what "this refers to when it has no other object to refer to"

function talk() {
  console.log(this); //returns global object
  // ...and the global object does not have a sound function, so this.sound would return "Nan"...
  console.log(this.sound);
}
talk();

console.log(
  "======================================\nKeyword 'this' when prototyping\n======================================"
);

// this keyword now will refer to what ever the function is acting on
// in this case the cat object below (cat.tak())
// returns cat
function speak() {
  console.log(this);
  // ...so now the cat object does have a sound property, and returns "meow" when talk() is invoked.
  console.log(this.says + this.sound);
}
// animal object contains the function talk() as an object
let animal = {
  speak: speak
};
// cat object contains sound as property
let cat = {
  says: "this is what a cat says: ",
  sound: "meow"
};
// Prototyping takes the cat object, and sets the animal object as it's prototype
// allowing cat to access all of animals properties
Object.setPrototypeOf(cat, animal);

// now cat object has both all of its own properties and that of animal's
// This allows cat to invoke talk() which passes the "sound" and "says" value into talk function

let result = cat.speak();
console.log(cat.says);
