
// constructors act like a blue print for creating new objects
// "this" refers to what ever is passing values to it like the in this case "new Person"
function Person(name, hair) {
    this.name = name;
    this.hair = hair;
    this.greeting = "Hello, my name is " + name + " and my hair is " + hair + "."
}

// To create a new object, declare it as a variable,
// Put "new" before the function invocation. 
// "new" tells javascript you are running the function as a constructor
const Sally = new Person("Sally", "brown")

// You can invoke any property by calling the object created and any of it's properties.
console.log(Sally.greeting)
console.log(Sally.name);
console.log(Sally.hair)

// ////////////////////////// Long Hand Version ///////////////////////////////////////////////

// The above constructor is the same thing as the below longhand coding.
function createPersonObject(name, hair) {
    let newObject = {}
    newObject.name = name;
    newObject.hair = hair;
    newObject.greeting = "Hello, my name is " + name + " and my hair is " + hair + "."
    return newObject
}

const Jane = createPersonObject ("Jane", "blond")
console.log(Jane.greeting)
console.log(Jane.name)
console.log(Jane.hair)
