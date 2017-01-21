// The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

// 0, 1, 1, 2, 3, 5, 8, 13, ..

// Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

function fibonacci (position) {
  var num1 = 1
  var num2 = 1
  var aux

  for (var i = 2; i < position; i += 1) {
    aux = num1 + num2
    num1 = num2
    num2 = aux
  }

  return num2
}

fibonacci(3)
