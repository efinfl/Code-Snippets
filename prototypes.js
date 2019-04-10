// Quick talk about "this"
function talk() {
  // keyword this is referring what ever it's taking action on
  // in this case it's the global object because
  // that's what "this refers to when it has no other object to refer to"
  console.log(this); //returns global object

  // ...and the global object does not have a sound function,
  // therefore returns "undefined"...
  console.log(this.sound);
}
//  when "talk()" is invoked
talk();

console.log(
  "======================================\nKeyword 'this' when prototyping\n======================================"
);

function talk() {
  // "this" will now refer to what ever this function is acting on
  // in this case the cat object below (cat.tak())
  // returns cat
  console.log(this); 

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
// Prototyping takes the object of cat, and sets the object animal as it's prototype
// allowing cat to access all of animals properties
Object.setPrototypeOf(cat, animal);

// now cat object has both all of its own properties and that of animal's
// This allows cat to invoke talk() which passes the "sound" and "says" value into talk function
cat.talk();


