// charFreq()

// Write a function charFreq() that takes a string and builds a frequency listing
// of the characters contained in it. Represent the frequency listing as a
// Javascript object. Try it with something like
// charFreq("abbabcbdbabdbdbabababcbcbab")

function charFreq (text) {
  var charFreqObject = {}
  var textLeng = text.length
  for (var i = 0; i < textLeng; i++) {
    if (!charFreqObject[text[i]]) {
      charFreqObject[text[i]] = 1
    } else {
      charFreqObject[text[i]] += 1
    }
  }
  return charFreqObject
}

charFreq('abbabcbdbabdbdbabababcbcbabe')
