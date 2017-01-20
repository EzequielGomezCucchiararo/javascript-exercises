// randomLargest()

// Randomizes three numbers in range (0.. 100) and prints the largest one.

function randomLargest () {
  var largestNumber = 0

  for (var i = 0; i < 3; i++) {
    var randNumber = Math.floor(Math.random() * 100)
    console.log
    if (randNumber > largestNumber) {
      largestNumber = randNumber
    }
  }
  return 'The largest number is: ' + largestNumber
}

randomLargest()
