// translate()

// Represent a small bilingual lexicon as a Javascript object in the following
// fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott",
// "new":"nytt", "year":"år"} and use it to translate your Christmas cards
// from English into Swedish

var biLexicon = { // eslint-disable-line no-unused-vars
  'merry': 'god',
  'christmas': 'jul',
  'and': 'och',
  'happy': 'gott',
  'new': 'nytt',
  'year': 'år'
}

function translate (text) {
  var result = []
  var textSplit = text.split(' ')
  var swedishList = []

  for (var j in biLexicon) {
    swedishList.push(biLexicon[j])
  }

  for (var i = 0; i < textSplit.length; i += 1) {
    result[i] = swedishList[i]
  }

  return result.join(' ')
}

translate('merry christmas and happy new year')
