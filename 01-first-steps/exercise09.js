// Hexadecimal enhanced

// Improves the previous function so besides the conversion also identifies some basic colors:

// Black: #000000
// White: #FFFFFF
// Red: #FF0000
// Green: #00FF00
// Blue: #0000FF

function getRGB (sHexColor) {
  var nRed = parseInt(sHexColor.substr(1, 2), 16)
  var nGreen = parseInt(sHexColor.substr(3, 2), 16)
  var nBlue = parseInt(sHexColor.substr(5, 2), 16)
  var color = 'rgb(' + nRed + ',' + nGreen + ',' + nBlue + ')'

  switch (sHexColor) {
    case '#000000':
      color += '\tBlack'
      break
    case '#FFFFFF':
      color += '\tWhite'
      break
    case '#FF0000':
      color += '\tRed'
      break
    case '#00FF00':
      color += '\tGreen'
      break
    case '#0000FF':
      color += '\tBlue'
      break
  }
  console.log(color)
}

getRGB('#FF0000')
