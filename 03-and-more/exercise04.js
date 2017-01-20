// randomOddSmallers()

// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one
// If the number was smaller than 40, print all the numbers down to the randomized one
// (i.e. if the result was 37, you should print: 40, 38)

function randomOddSmallers () {
  var randNumber = Math.floor(Math.random() * 100)
  var allOddNumbersSmallerThan40 = ''

  if (randNumber > 40) {
    for (var i = 40; i <= randNumber; i++) {
      if (i % 2 !== 0) {
        allOddNumbersSmallerThan40 += i + ', '
      }
    }
  } else {
    for (var j = 40; j >= randNumber; j--) {
      if (j % 2 !== 0) {
        allOddNumbersSmallerThan40 += j + ', '
      }
    }
  }
  return allOddNumbersSmallerThan40
}

randomOddSmallers()
