// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  // First strip out the punctuation by telling the function to only accept characters a-z and 0-9
  // by default, match method creates an array
  let wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // console.log(wordArr);
  // Then sort the array. Sort takes a function ,a and b just gives the function two indexes to take in
  // BTW sort is an iterator method. It loops by default
  let sorted = wordArr.sort(function(a, b) {
    // compares the current index in the iteration to the previous and sorts longest to shortest
    // Now the longest word is in the first index of the array.
    // console.log(b.length - a.length);
    return b.length - a.length;
  });
  // Filter out any words that don't match the length of the first (longest) word.
  // If it does, keep it, if not, don't include
  let longestWordArr = sorted.filter(function(word) {
    return word.length === sorted[0].length;
  });
  // Now check to see if there's only one item int the array
  if (longestWordArr.length == 1) {
    // if true return the first word (which is the longest)
    return longestWordArr[0];
  } // if not, return the entire array
  else return longestWordArr;
}

// CHALLENGE 2: ARRAY CHUNKING ////////// while loop solution ////////////////
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let chunkedArray = [];
  let i = 0;
  // loop while i is less than length of arr
  while (i < arr.length) {
    // push into chunkedArray slices from the index to the index + chunk length
    chunkedArray.push(arr.slice(i, i + len));
    // increment by len
    i += len;
  }
  return chunkedArray;
}

// CHALLENGE 2: ARRAY CHUNKING ////////// forEach solution ////////////////
// I didn't understand this solution
function chunkArray2(arr, len) {
  // initiate chunkedArray;
  let chunkedArr = [];
  // loop through to...
  arr.forEach(function(val) {
    // get the last element
    let last = chunkedArr[chunkedArr.length - 1];
    console.log(last);
    // check if last and if it's length is equal to the chunk
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = chunkArray2([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output);
