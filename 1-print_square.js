// JavaScript code for printing a square
function printSquare(size) {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

// Print a square of size 10
printSquare(10);
