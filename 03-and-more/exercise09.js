// randomLeastCommon()

// Randomizes two numbers and prints their least common multiplication of them.
// (use http://en.wikipedia.org/wiki/Least_common_multiple for details)
//   Randomizes two numbers and prints their average and standard deviation

function randomLeastCommon (number1, number2) {
  function range (min, max) {
    var arr = []
    for (var i = min; i <= max; i++) {
      arr.push(i)
    }
    return arr
  }

  function gcd (a, b) {
    return !b ? a : gcd(b, a % b)
  }

  function lcm (a, b) {
    return (a * b) / gcd(a, b)
  }

  var result = number1
  range(number1, number2).forEach(function (n) {
    result = lcm(result, n)
  })

  return result
}
