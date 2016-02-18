
/** @module randomly */
const Randomly = {};

/**
 * Creates a random string.
 * @param {number} length - The desired string length.
 * @return {string} The random string.
 */
Randomly.string = length => {
  if (!(length instanceof Number) && typeof length !== 'number' || length < 0) {
    throw new Error('Length must be a number greater than or equal to 0');
  }
  return (+new Date() * Math.random()).toString(36).substring(0, length);
};

/**
 * Creates a random number within a range.
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @return {number} The random number.
 */
Randomly.int = (min, max) => {
  if (!(min instanceof Number) && typeof min !== 'number') {
    throw new Error('Min must be a number');
  }
  if (!(max instanceof Number) && typeof max !== 'number') {
    throw new Error('Max must be a number');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Calculates the smallest n-digit number.
 * @param {number} degree - The number of digits.
 * @return {number} The smallest n-digit number.
 */
Randomly.getLowerInt = degree => {
  if (!(degree instanceof Number) && typeof degree !== 'number' || degree <= 0) {
    throw new Error('Degree must be a number greater than 0');
  }
  if (degree === 1) return 0;
  return Math.pow(10, degree - 1);
};

/**
 * Calculates the largest n-digit number.
 * @param {number} degree - The number of digits.
 * @return {number} The largest n-digit number.
 */
Randomly.getUpperInt = degree => {
  if (!(degree instanceof Number) && typeof degree !== 'number' || degree <= 0) {
    throw new Error('Degree must be a number greater than 0');
  }
  return Math.pow(10, degree) - 1;
};

/**
 * Creates a random string, number or object.
 * @param {Function} type - The type to create (e.g. String, Number or Object).
 * @param {number} length - The length (for strings and Objects) or boundary degree (for numbers).
 * @return {string|number|Object} The random string, number or object.
 */
Randomly.create = (type, length) => {
  if (typeof length === 'undefined') length = 5;
  if (!(length instanceof Number) && typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a number greater than 0');
  }

  switch (type) {
    case String:
      return Randomly.string(length);
    case Number:
      return Randomly.int(Randomly.getLowerInt(length), Randomly.getUpperInt(length));
    case Object:
    /* falls through */
    default:
      return { 'key': Randomly.string(length) };
  }
};

/**
 * Creates an array of random strings, numbers or objects.
 * @param {Function} type - The type to create (e.g. String, Number or Object).
 * @param {number} quantity - The quantity to create.
 * @param {number} length - The length (for strings and Objects) or boundary degree (for numbers).
 * @return {string[]|number[]|Object[]} The array of random strings, numbers or objects.
 */
Randomly.collect = (type, quantity, length) => {
  if (typeof type === 'undefined') type = Object;
  if (typeof quantity === 'undefined') quantity = 5;
  if (typeof length === 'undefined') length = 5;
  const array = [];

  if (!(quantity instanceof Number) && typeof quantity !== 'number' || quantity < 0) {
    throw new Error('Quantity must be a number greater than or equal to 0');
  }

  if (!(length instanceof Number) && typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a number greater than 0');
  }

  while (quantity > 0) {
    array.push(Randomly.create(type, length));
    quantity--;
  }

  return array;
};

/**
 * Sorts an array in random order.
 * @param {Array} array - The array to sort.
 * @return {Array} The sorted array.
 */
Randomly.sort = function (array) {
  var len = array.length;
  const newArray = [];

  while (len > 0) {
    newArray.push(array[Randomly.int(0, len)]);
    len--;
  }

  return newArray;
};

module.exports = Randomly;