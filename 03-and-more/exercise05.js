// randomRandom()

// Randomizes a number n in range 0..100. Now randomizes n more
// numbers in that range, printing the largest of them

function randomRandom () {
  var largestRandom = 0
  var randomLimit = Math.floor(Math.random() * 100)
  var randomNumber

  for (var i = 0; i < randomLimit; i++) {
    randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber > largestRandom) largestRandom = randomNumber
  }
  return largestRandom
}

randomRandom()
