// Calculator

// Define a function called calculator that receives an
// operation and two numbers and returns the result of
// the operation applied to the values passed as parameters

function calculator (operation, num1, num2) { // eslint-disable-line no-unused-vars
  var result
  switch (operation) {
    case 'suma':
      result = num1 + num2
      break
    case 'resta':
      result = num1 - num2
      break
    case 'multiplicacion':
      result = num1 * num2
      break
    case 'division':
      result = num1 / num2
      break
    case 'modulo':
      result = num1 % num2
      break
  }
  return result
}

calculator('resta', 2, 3)
