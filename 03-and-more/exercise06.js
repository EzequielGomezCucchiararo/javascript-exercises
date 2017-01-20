// randomSum()

// Randomizes a number (range 1000 .. 9999 )and calculate the sum of its digits.
// For instance, if the randomized number was 1049, program should print 14

function randomSum () {
  var randomSumDigits = 0
  var randomNumberDigitArray = (Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + '').split('')

  for (var i = randomNumberDigitArray.length - 1; i >= 0; i--) {
    randomSumDigits += parseInt(randomNumberDigitArray[i], 10)
  }

  return randomNumberDigitArray.join('') + ': ' + randomSumDigits
}

randomSum()

