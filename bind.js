let dog = {
  sound: "woof",
  talk: function() {
    console.log(this.sound); //this keyword will refer to what ever it's called on...
  }
};
// in this case the dog object
dog.talk();

// However, when assigned as a variable it's just pulling the talk method out of dog...
console.log("-------------------");
let talkFunction = dog.talk;

// and is the same as below and this keyword no longer has a reference dog and it's sound property
// let talkFunction = function(){
//     console.log(this.sound) 
// }

// thus when the variable function is called, it returns undefined...
talkFunction();

// You can bind the function to dog in order to fix this
// by telling the talk function to bind to the dog object so that
// the this keyword once again has access to dog and it's sound property
let boundTalkFunction = talkFunction.bind(dog);

boundTalkFunction();

// --- Real World Example --
// theres no document so this won't run but just example of how bind might be used.

let button = document.getElementById("clickMe");


// You must bind the dog.talk because without bind its the same as ...
button.addEventListener("click", dog.talk.bind(dog));

// ...below leaving "this" without a reference to the dog sound property
button.addEventListener("click", function(){console.log(this.sound)})
