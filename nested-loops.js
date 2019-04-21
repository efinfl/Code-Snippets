let twoD = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 10, 5, 7, 3, 22, 6, 4, 2],
  [123, 54, 12, 11, 9, 15]
];

let rows = twoD.length;
console.log("towD(row) length: " + rows);

function twoDArrayLoop(arr) {
  // Loops through the twoD array
  for (let i = 0; i < rows; i++) {
    let items = twoD[i].length;
    console.log("Each array index and it's length: " + i, items);
    //Loops through each array of twoD
    for (let n = 0; n < items; n++) {
        console.log("Item in each array: " + twoD[i][n])
    }
  }
}

twoDArrayLoop(twoD);
