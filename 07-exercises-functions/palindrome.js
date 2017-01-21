// Write a JavaScript function that checks whether a passed string is palindrome or not
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g., madam or nurses run

function isPalindrome (sText) {
  var reversedText = ''

  for (var i = sText.length; i > 0; i -= 1) {
    reversedText += sText[i - 1]
  }

  return reversedText === sText
}

isPalindrome('madam')
