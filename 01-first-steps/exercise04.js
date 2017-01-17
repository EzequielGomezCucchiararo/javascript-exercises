// Calculation

// Write a program that writes in the console all the multiples of 23
// less than 500 and at the end writes the sum of all of them

function multOf23 () {
  var sElements = 'Elements: '
  var nSum = 0
  for (var i = 0; i < 500; i++) {
    if (i % 23 === 0) {
      sElements += i + ' '
      nSum += i
    }
  }
  console.log(sElements)
  console.log('Sum: ' + nSum)
}

multOf23()

