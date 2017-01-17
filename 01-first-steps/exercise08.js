// Hexadecimal

// Writes a function that convert a hexadecimal color, "blue"
// for example "#0000FF" in its RGB representation rgb(0,0,255)".
// Give the function the name getRGB() and test it with this code

function getRGB (sHexColor) {
  var nRed = parseInt(sHexColor.substr(1, 2), 16)
  var nGreen = parseInt(sHexColor.substr(3, 2), 16)
  var nBlue = parseInt(sHexColor.substr(5, 2), 16)

  console.log('rgb(' + nRed + ',' + nGreen + ',' + nBlue + ')')
}

getRGB('#FF04FF')
