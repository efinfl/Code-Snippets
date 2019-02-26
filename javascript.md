# JavaScript
## -----Common String Methods

let firstName = Eric
let lastName = Fig

<!-- Trims spaces from front and back of a string -->
- .trim()

<!-- breaks up a string between what ever is in the ()-->
- .split()

<!-- makes all letters in a string lower case -->
- .toUpperCase()

<!-- Makes all letters in a string upper case -->
- .toLowerCase()

<!-- Concatination in prefered ES6 -->
`${firstName} ${lastName}`

## -----Common Number Methods

let example = 7.77;

<!--Return the number before the decimal (integer) -->
- parseInt(example); <!--would return 7 

<!--returns the entire number -->
- parseFloat(). <!--would return 7.77

<!-- Returns to a set number decimal places and adds zeros when needed -->
example.toFixed(5) <!--would return 7.77000
example.toFixed(1) <!--would return 8, it rounds up

## -----Common Boolean Methods

let example = true

<!-- Checks to see if something is a boolean -->
- boolean()

console.log(boolean(example))
<!-- would return the below -->
true


## -----Simple Array Methods
let example1 = [5, 7, 6];

<!-- Adds to the array -->
- .push()
example1.push(8, 9, 10);
console.log(example1)
<!-- Would return the following -->
[5, 7, 6, 8, 9, 10]

- .pop
example1.pop()
console.log(example1)
<!-- Would return the following -->
[5, 7, 6, 8, 9]

example1[0] = 1; <!--This will replace the 5 (index 0)
console.log(example1)
<!-- would return the below -->
[1, 7, 6]

<!-- This function returns each value in the array -->
- .forEach()
example1.forEach((element) => { 
    console.log(element)
});
<!-- Would return the below -->
1
7
6

<!-- Remember that arrays, so example2 is jut referencing example1. So they would retutn the sa values-->
let example1 = ['Dylan', 5, true];

let example2 = example1;

<!-- You can create a new array in example 2 by using the spread operator -->
let example2 = [...example1];


example2.push(11);

## -----Basic Object Methods

let example1 = {
    firstName: 'Dylan', <!--the property is also referred to as a key-->
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31 <!-- A properties value can also be changed example.age is now 31-->

console.log(example1.address.city); <!--Returns the the value Austin -->

<!-- Gets the key of an object -->
- Object.keys()

console.log(Object.key(example1)) 
<!-- This would return the below-->
["firstName", "lastName", "address", "age", "cats"]

<!-- Gets all the values of an object -->
- Object.values()

console.log(Object.value(example1))
<!-- This would return the below-->
["Dylan", "Israel", {city: "Austin", state: "Texas"}, 31, ["Milo", "Tito", "Achieles"]]

<!-- This looks to see if an object has a specific property -->
- .hasOwnProperty()
console.log(example1.hasOwnProperty(firstName))
<!-- Would return the below -->
true

## ----- Basic Object Constructor

- Object.assign({}, myObject)

let example1 = {
    firstName: 'Dylan'
};
<!-- This constructor will take all the properties of example1 object and apply it t example2
and make a new object with a property of name. -->
let example2 = Object.assign({}, example1);

example2.lastName = 'Israel';
consol.log(example2)
<!-- this would return the below. -->
{firstName: "Dylan", lastName: "Israel"}

## -----Arithmetic Operators

- +, -, /, *, <!--all the normal operators work normally-->
<!-- no need to put () like algebra. JS knows the order -->
let example = 5 + 5 - 4 * 4 / 4
console.log(example)
<!-- this will give the following result below -->
6

- %
<!-- This returns the remainder -->
let example1 = 5 % 2;

console.log(example1)
<!-- would return the below because 5/2 is 2 with a reaminder of 1-->
1


