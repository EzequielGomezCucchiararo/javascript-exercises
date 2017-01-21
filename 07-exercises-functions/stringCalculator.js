// Define a function called add with a single argument input. The input to the function will be
// a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g

// add(1,2,3,4) // => 10

function add (stringOfNumbers) {
  var sum = 0
  var arrayOfNumbers = stringOfNumbers.split(',')

  for (var i = 0; i < arrayOfNumbers.length; i += 1) {
    sum += parseInt(arrayOfNumbers[i], 10)
  }

  return sum
}

add('1,2,3,4')
