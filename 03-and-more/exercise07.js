// randomOne()

// Randomizes a number (range 1000..9999) and calculate the sum of its digits
// repeatedly until you reach one digit only. For instance, if the randomized
// number was 1049, program should print 5

function randomOne () {
  var randomNumber
  var sumDigitsRandomNumber

  function generateRandomNumber () { // eslint-disable-line no-unused-vars
    return (Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + '')
  }

  function sumOfDigits (number) {
    var listOfDigits = (number + '').split('')
    var totalDigits = listOfDigits.length
    var totalSumOfDigits = 0

    for (var i = 0; i < totalDigits; i++) {
      totalSumOfDigits += parseInt(listOfDigits[i], 10)
    }

    return totalSumOfDigits
  }

  function checkMoreOneDigit (number) {
    return ((number + '').split('').length) > 1
  }

  // Logic body -----

  randomNumber = generateRandomNumber()

  do {
    randomNumber = sumOfDigits(randomNumber) // 11
  } while (checkMoreOneDigit(randomNumber))

  return randomNumber
}

randomOne()

