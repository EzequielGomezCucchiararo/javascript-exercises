// isBoolean

// Define a function called isBoolean that receives a value and return
// true if the value received is a boolean

function isBoolean (b) { // eslint-disable-line no-unused-vars
  return typeof b === 'boolean'
}

isBoolean(true)
isBoolean(!!1)
isBoolean('a')
