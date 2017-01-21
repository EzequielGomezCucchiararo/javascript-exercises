// Write a JavaScript function that reverse a number

// Example x = 32243;
// Expected Output : 34223

function reverseNumber (numberToReverse) {
  var stringNumber = numberToReverse + ''
  var reversedNumber = ''

  for (var i = stringNumber.length; i > 0; i -= 1) {
    reversedNumber += stringNumber[i - 1]
  }

  return reversedNumber
}
reverseNumber('123123')
