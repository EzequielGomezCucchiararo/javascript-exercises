// randomEven()

// Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized

function randomEven () { // eslint-disable-line no-unused-vars
  var randNumber = Math.floor(Math.random() * 100)
  var allEvenNumbers = ''
  for (var i = 0; i < randNumber; i++) {
    if (i % 2 === 0) {
      allEvenNumbers += i + '-'
    }
  }
  return allEvenNumbers
}
