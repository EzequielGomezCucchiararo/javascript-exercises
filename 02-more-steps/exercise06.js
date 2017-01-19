// filterLongWords()

// Write a function filterLongWords() that takes an array of
// words and an integer i and returns the array of words that are longer than i

var words = ['casa', 'casas', 'holaaaaaaaaa', 'ezequiel', 'si']

filterLongWords(words, 5)

function filterLongWords (wordsArray, i) { // eslint-disable-line no-unused-vars
  var longerThanI = []
  for (var j = 0; j < wordsArray.length; j++) {
    if (wordsArray[j].length > i) {
      longerThanI.push(wordsArray[j])
    }
  }
  return longerThanI
}
