/* @flow */
const Randomly = {}

Randomly.string = (length: number): string => {
  if (!(length instanceof Number) && typeof length !== 'number' || length < 0) {
    throw new Error('Length must be a number greater than or equal to 0')
  }
  return (+new Date() * Math.random()).toString(36).substring(0, length)
}

Randomly.int = (min: number, max: number): number => {
  if (!(min instanceof Number) && typeof min !== 'number') {
    throw new Error('Min must be a number')
  }
  if (!(max instanceof Number) && typeof max !== 'number') {
    throw new Error('Max must be a number')
  }
  return Math.floor(Math.random() * (max - min)) + min
}

Randomly.getLowerInt = (degree: number): number => {
  if (!(degree instanceof Number) && typeof degree !== 'number' || degree <= 0) {
    throw new Error('Degree must be a number greater than 0')
  }
  if (degree === 1) return 0
  return Math.pow(10, degree - 1)
}

Randomly.getUpperInt = (degree: number): number => {
  if (!(degree instanceof Number) && typeof degree !== 'number' || degree <= 0) {
    throw new Error('Degree must be a number greater than 0')
  }
  return Math.pow(10, degree) - 1
}

Randomly.create = (type: mixed, length: number): string | number | Object => {
  if (typeof length === 'undefined') length = 5
  if (!(length instanceof Number) && typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a number greater than 0')
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

Randomly.collection = (type: Function, quantity: number, length: number): Array<string | number | Object> => {
  if (typeof type === 'undefined') type = Object
  if (typeof quantity === 'undefined') quantity = 5
  if (typeof length === 'undefined') length = 5
  const array: Array<string | number | Object> = []

  if (!(quantity instanceof Number) && typeof quantity !== 'number' || quantity < 0) {
    throw new Error('Quantity must be a number greater than or equal to 0')
  }

  if (!(length instanceof Number) && typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a number greater than 0')
  }

  while (quantity > 0) {
    array.push(Randomly.create(type, length))
    quantity--
  }

  return array
}

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
