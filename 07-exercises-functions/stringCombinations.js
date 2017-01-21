// Write a JavaScript function that generates all combinations of a string

// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combinationString (sText) {
  var listOfCombinations = []
  var auxString = ''

  for (var i = 0; i < sText.length; i += 1) {
    auxString = sText[i]
    listOfCombinations.push(auxString)

    for (var j = i + 1; j < sText.length; j += 1) {
      auxString += sText[j]
      listOfCombinations.push(auxString)
    }
  }

  return listOfCombinations.join(', ')
}

combinationString('dog')
