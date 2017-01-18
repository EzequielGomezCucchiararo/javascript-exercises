// Calculator Plus

// Define a function called calculator that receives an
// operation and several numbers (can be 2 or 10 or whatever) returns
// the result of the operation applied to the valuespassed as parameters

function calculator (operation) { // eslint-disable-line no-unused-vars
  var result = arguments[1]
  switch (operation) {
    case 'suma':
      for (var i = 2; i < arguments.length; i++) {
        result += arguments[i]
      }
      break
    case 'resta':
      for (var i = 2; i < arguments.length; i++) {
        result -= arguments[i]
      }
      break
    case 'multiplicacion':
      for (var i = 2; i < arguments.length; i++) {
        result *= arguments[i]
      }
      break
    case 'division':
      for (var i = 2; i < arguments.length; i++) {
        result /= arguments[i]
      }
      break
  }
  return result
}

calculator('resta', 2, 3)
