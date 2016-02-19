/* @flow */
/** @module randomly */
const Randomly = {}

/**
 * Creates a random string.
 * @alias module:randomly.string
 * @param {number} length - The desired string length.
 * @return {string} The random string.
 * @throws {TypeError} Argument length must be a number
 * @throws {RangeError} Argument length must be greater than or equal to 0
 */
Randomly.string = (length: number): string => {
  if (!(length instanceof Number) && typeof length !== 'number') {
    throw new TypeError('Length must be a number')
  }
  if (length < 0) {
    throw new RangeError('Length must be greater than or equal to 0')
  }
  const random = () => (+new Date() * Math.random()).toString(36)
  var _string = random()
  while (_string.length < length) {
    _string = _string.concat(random())
  }
  return _string.substring(0, length)
}

/**
 * Creates a random number within a range.
 * @alias module:randomly.int
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @return {number} The random number.
 * @throws {TypeError} Argument min must be a number
 * @throws {TypeError} Argument max must be a number
 */
Randomly.int = (min: number, max: number): number => {
  if (!(min instanceof Number) && typeof min !== 'number') {
    throw new TypeError('Min must be a number')
  }
  if (!(max instanceof Number) && typeof max !== 'number') {
    throw new TypeError('Max must be a number')
  }
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Calculates the smallest n-digit number.
 * @alias module:randomly.getLowerInt
 * @param {number} degree - The number of digits.
 * @return {number} The smallest n-digit number.
 * @throws {TypeError} Argument degree must be a number
 * @throws {RangeError} Argument degree must be greater than or equal to 0
 */
Randomly.getLowerInt = (degree: number): number => {
  if (!(degree instanceof Number) && typeof degree !== 'number') {
    throw new TypeError('Degree must be a number')
  }
  if (degree <= 0) {
    throw new RangeError('Degree must be greater than 0')
  }
  if (degree === 1) return 0
  return Math.pow(10, degree - 1)
}

/**
 * Calculates the largest n-digit number.
 * @alias module:randomly.getUpperInt
 * @param {number} degree - The number of digits.
 * @return {number} The largest n-digit number.
 * @throws {TypeError} Argument degree must be a number
 * @throws {RangeError} Argument degree must be greater than or equal to 0
 */
Randomly.getUpperInt = (degree: number): number => {
  if (!(degree instanceof Number) && typeof degree !== 'number') {
    throw new TypeError('Degree must be a number')
  }
  if (degree <= 0) {
    throw new RangeError('Degree must be greater than 0')
  }
  return Math.pow(10, degree) - 1
}

/**
 * Creates a random string, number or object.
 * @alias module:randomly.create
 * @param {Function} type - The type to create (e.g. String, Number or Object).
 * @param {number} length - The length (for strings and Objects) or boundary degree (for numbers).
 * @return {string|number|Object} The random string, number or object.
 * @throws {TypeError} Argument length must be a number
 * @throws {RangeError} Argument length must be greater than or equal to 0
 */
Randomly.create = (type: mixed, length: number): string | number | Object => {
  if (typeof length === 'undefined') length = 5
  if (!(length instanceof Number) && typeof length !== 'number') {
    throw new TypeError('Length must be a number')
  }
  if (length <= 0) {
    throw new RangeError('Length must be greater than 0')
  }
  switch (type) {
    case String:
      return Randomly.string(length)
    case Number:
      return Randomly.int(Randomly.getLowerInt(length), Randomly.getUpperInt(length))
    case Object:
      /* falls through */
    default:
      return { 'key': Randomly.string(length) }
  }
}

/**
 * Creates an array of random strings, numbers or objects.
 * @alias module:randomly.collect
 * @param {Function} type - The type to create (e.g. String, Number or Object).
 * @param {number} quantity - The quantity to create.
 * @param {number} length - The length (for strings and Objects) or boundary degree (for numbers).
 * @return {string[]|number[]|Object[]} The array of random strings, numbers or objects.
 * @throws {TypeError} Argument quantity must be a number
 * @throws {RangeError} Argument quantity must be greater than 0
 * @throws {TypeError} Argument length must be a number
 * @throws {RangeError} Argument length must be greater than or equal to 0
 */
Randomly.collect = (type: Function, quantity: number, length: number): Array<string | number | Object> => {
  if (typeof type === 'undefined') type = Object
  if (typeof quantity === 'undefined') quantity = 5
  if (typeof length === 'undefined') length = 5
  const array: Array<string | number | Object> = []

  if (!(quantity instanceof Number) && typeof quantity !== 'number') {
    throw new TypeError('Quantity must be a number')
  }
  if (quantity < 0) {
    throw new TypeError('Quantity must be greater than or equal to 0')
  }
  if (!(length instanceof Number) && typeof length !== 'number') {
    throw new TypeError('Length must be a number')
  }
  if (length <= 0) {
    throw new TypeError('Length must be greater than 0')
  }

  while (quantity > 0) {
    array.push(Randomly.create(type, length))
    quantity--
  }

  return array
}

/**
 * Sorts an array in random order.
 * @alias module:randomly.sort
 * @param {Array} array - The array to sort.
 * @return {Array} The sorted array.
 */
Randomly.sort = function <T: string | number | Object> (array: Array<T>): Array<T> {
  var len: number = array.length
  const newArray: typeof array = []

  while (len > 0) {
    newArray.push(array[Randomly.int(0, len)])
    len--
  }

  return newArray
}

module.exports = Randomly
