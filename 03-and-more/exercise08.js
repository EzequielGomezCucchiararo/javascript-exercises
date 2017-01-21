// randomSmallest()

// Randomizes two numbers and prints the smallest number that is greater than one,
// such that both numbers are divided by it with no remainder. For instance,
// for 9 and 6 you should print 3. If there isn't one a proper note should be printed

function randomSmallest () {
  var num1 = generateRandomNumber()
  var num2 = generateRandomNumber()
  var greaterNumber = (num1 > num2) ? num1 : num2
  var lowestCommonDenominator
  var hasLCM = false
  var result = ''

  function generateRandomNumber () { // eslint-disable-line no-unused-vars
    return (Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + '')
  }

  function isDivisibleBy (number1) {
    return function (number2) {
      return number2 % number1 === 0
    }
  }

  for (var i = greaterNumber; i > 1; i -= 1) {
    if (isDivisibleBy(i)(num1) && isDivisibleBy(i)(num2)) {
      lowestCommonDenominator = i
      hasLCM = true
    }
  }

  result = (hasLCM) ? 'The LCD of ' + num1 + ' and ' + num2 + ' is: ' + lowestCommonDenominator
                    : num1 + ' and ' + num2 + ' haven\'t got any LCM'

  return result
}

randomSmallest()

