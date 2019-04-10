function talk() {
  // keyword this is referring what ever it's taking action on
  // in this case the global object below (tak())
  console.log(this); //returns global object

  // ...and the global object does not have a sound function,
  // therefore returns "undefined" when "talk()" is invoked
  console.log(this.sound);
}
talk();

console.log(
  "======================================\nKeyword 'this' when prototyping\n======================================"
);

function talk() {
  // keyword this is now referring what ever it's taking action on
  // in this case the cat object below (cat.tak())
  console.log(this); //returns cat object

  // ...so now the cat object does have a sound property,
  // therefore returns "meow" when talk() is invoked.
  console.log(this.says + this.sound);
}

// animal object contains the function talk() as an object
let animal = {
  talk: talk
};
// cat object contains sound as property
let cat = {
  says: "this is what a cat says: ",
  sound: "meow"
};
// this takes the object of cat, and sets the object animal as it's prototype
// allowing cat to inherit all of animals properties
Object.setPrototypeOf(cat, animal);

// now cat object has both all of its own properties and that of the animal's
// This allows cat to invoke talk() which passes the sound and says  value to talk
cat.talk();
