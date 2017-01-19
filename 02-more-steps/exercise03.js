// reverse()

// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj"

function reverseText (text) { // eslint-disable-line no-unused-vars
  return text.split('').reverse().join('')
}

reverseText('jag testar')
