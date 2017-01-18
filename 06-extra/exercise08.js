// encodeWordPlus

// Improve the previous function to add a random number between
// 0 and 1000 every 7 characters

function encodeWordPlus (s) { // eslint-disable-line no-unused-vars
  var randNum1k = function () {
    return Math.floor((Math.random() * 1000))
  }
  s = s.replace(/T/g, '7').replace(/A/g, '4').replace(/S/g, '5').replace(/O/g, '0').split('')
  for (var i = 0; i <= s.length; i++) {
    if ((i % 7) === 0) {
      s[i - 1] = randNum1k()
    }
  }
  return s.join('')
}

encodeWordPlus('T3SF658Y')
