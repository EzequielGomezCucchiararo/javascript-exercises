// isVowel() function

// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

function isVowel (char1) {
  char1 = char1.toUpperCase()
  var vowelCheck = char1 === 'A' || char1 === 'E' || char1 === 'I' || char1 === 'O' || char1 === 'U'
  if (vowelCheck) {
    console.log(char1 + ' is a vowel')
  } else {
    console.log(char1 + ' is NOT a vowel')
  }
}

isVowel('a')
isVowel('b')

