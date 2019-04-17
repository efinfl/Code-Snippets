// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  const array = str.split("");
  array.reverse();
  return array.join("");
}

// Or Chaining /////////////////////////////////////

function reverseString2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Or for loop deprecating /////////////////////////////////////

function reverseString3(str) {
  let revStr = "";
  // the length will include 0 making it 6 numbers to go through, so subtract one of them
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}

// Or for loop normal /////////////////////////////////////

function reverseString4(str) {
  let revStr = "";
  for (let i = 0; i <= str.length; i++) {
    // Pulls letter from the index and adds it to the front of the string.
    revStr = str[i] + revStr;
    // console.log(str[i] + " || " + revStr)
  }
  return revStr;
}

// Or ES6 ///////////////////////////////////////////////

function reverseString4(str) {
  let revStr = "";
  for (let char of str) {
    // Pulls letter from the index and adds it to the front of the string.
    revStr = char + revStr;
    // console.log(str[i] + " || " + revStr)
  }
  return revStr;
}
// Or high order forEach array function ///////////////////////

function reverseString5(str) {
  let revStr = "";
  str.split("").forEach(function(char) {
    revStr = char + revStr;
  });
  return revStr;
}

// Or high order reduce function (ES6) ////////////////////////////
function reverseString6(str) {
  // reduce function takes two params, a function and what to start value in this cas empty string
  // This splits the string into an array then reduces(hence the term reduce) it to one value.
  // This is whats happening
  // c = h, r = ""
  // c = e, r = h
  // c = l r = eh
  // c = l r = leh
  // c = o, r = lleh
  // c = "", r = olleh
  return str.split("").reduce(function(revString, char) {
    console.log("c: " + char);
    console.log("r: " + revString);
    return char + revString;
  }, "");
}

// Cleaned up ES6 of above ----------------------------------
function reverseString7(str) {
  return str.split("").reduce((revString, char) => char + revString, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let string = str;
  let stringLower = string.toLowerCase();
  let revStr = stringLower
    .split("")
    .reverse()
    .join("");
  let answer = "";
  if (stringLower === revStr) {
    answer = str + " is a palindrome";
  } else {
    answer = str + " is not a palindrome";
  }
  return answer;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  inter = int
    .toString()
    .split("")
    .reverse()
    .join("");
  console.log(typeof inter);

  let parsed = parseInt(inter);
  console.log(typeof parsed);

  return parsed;
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // make sure all letters are lowercase and split each word into an array
  let a = str.toLowerCase().split(" ");
  // loop through a array with each word bering an item
  for (let i = 0; i < a.length; i++) {
    // for each item in a (a[i]) pick out indexes fro 0 to before 1 then
    // make then uppercase, and add everything in a[i] from index 1 on.
    a[i] = a[i].substring(0, 1).toUpperCase() + a[i].substring(1);
  }
  return a.join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i < 100; i++) {}
}

// Call Function
const output = capitalizeLetters("i love javascript");

console.log(output);
