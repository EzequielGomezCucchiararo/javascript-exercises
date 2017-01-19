// translate()

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos
// isos fofunon".

function translateToRovarspraket (originalText) {
  return originalText.replace(/[b-df-hj-np-tv-z]/gi, '$&o$&')
}

translateToRovarspraket('this is fun')
