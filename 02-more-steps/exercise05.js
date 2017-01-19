// findLongestWord()

// Write a function findLongestWord()
// that takes an array of words and returns the length of the longest one

var wordList = ['casa', 'casas', 'holaaaaaaaaa', 'ezequiel', 'si']

findLongestWord(wordList)

function findLongestWord (wordsArray) {
  var longestWord = ''
  for (var i = 0; i < wordList.length; i++) {
    if (longestWord.length < wordList[i].length) {
      longestWord = wordList[i]
    }
  }

  return longestWord.length
}
