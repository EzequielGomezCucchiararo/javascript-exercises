// randomOdd()

// Randomizes a number (range 0..100), then prints all the odd numbers
// from 40 to that one. If the number was smaller than 40 nothing should be printed

function randomOddBiggerThan40 () {
  var randNumber = Math.floor(Math.random() * 100)
  var allOddNumbersGreaterThan40 = ''
  for (var i = 0; i < randNumber; i++) {
    if ((i % 2 !== 0) && (i >= 40)) {
      allOddNumbersGreaterThan40 += i + '-'
    }
  }
  return allOddNumbersGreaterThan40
}

randomOddBiggerThan40()
