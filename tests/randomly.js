const Randomly = require('../dist/randomly')
const test = require('tape')

test('Randomly#string', (t) => {
  t.plan(7)
  t.ok(Randomly.string instanceof Function, 'exists')
  t.throws(Randomly.string.bind(this, 'length'), 'throws an error if length is NaN')
  t.throws(Randomly.string.bind(this, -1), 'throws an error if length is less than zero')
  t.equals(Randomly.string(0), '', 'returns a zero-length string')
  t.equals(Randomly.string(5).length, 5, 'returns a string of length 5')
  t.equals(typeof Randomly.string(5), 'string', 'returns a string')
  t.ok(/[a-zA-Z0-9]/.test(Randomly.string(5)), 'returns a string of lowercase letters, uppercase letters and numbers')
})

// test('Randomly#int', (t) => {
//   t.plan(11)
//   it('exists', () => {
//     assert.typeOf(Random.int, 'function')
//   })
//
//   it('throws an error if min is NaN', () => {
//     assert.throw(Random.int.bind(this, 'min', 1))
//   })
//
//   it('throws an error if max is NaN', () => {
//     assert.throw(Random.int.bind(this, 1, 'max'))
//   })
//
//   it('returns a random negative number', () => {
//     let min = -1000
//     let max = -1
//     let randomNumber = Random.int(min, max)
//     assert.isBelow(randomNumber, max)
//     assert.isAbove(randomNumber, min)
//   })
//
//   it('returns a random number', () => {
//     let min = -1000
//     let max = 1000
//     let randomNumber = Random.int(min, max)
//     assert.isBelow(randomNumber, max)
//     assert.isAbove(randomNumber, min)
//   })
//
//   it('returns a positive number', () => {
//     let min = 1
//     let max = 1000
//     let randomNumber = Random.int(min, max)
//     assert.isBelow(randomNumber, max)
//     assert.isAbove(randomNumber, min)
//   })
//
//   it('returns a positive number (inverted min & max)', () => {
//     let min = 1000
//     let max = 0
//     let randomNumber = Random.int(min, max)
//     assert.isBelow(randomNumber, min)
//     assert.isAbove(randomNumber, max)
//   })
// })
//
// test('Randomly#getLowerInt', (t) => {
//   t.plan(5)
//   it('exists', () => {
//     assert.typeOf(Random.getLowerInt, 'function')
//   })
//
//   it('throws an error if degree is NaN', () => {
//     assert.throw(Random.getLowerInt.bind(this, 'degree'))
//   })
//
//   it('throws an error if degree is equal to zero', () => {
//     assert.throw(Random.getLowerInt.bind(this, 0))
//   })
//
//   it('returns the smallest one-digit number', () => {
//     assert.strictEqual(Random.getLowerInt(1), 0)
//   })
//
//   it('returns the smallest n-digit number', () => {
//     assert.strictEqual(Random.getLowerInt(5), 10000)
//   })
// })
//
// test('Randomly#getUpperInt', (t) => {
//   t.plan(5)
//   it('exists', () => {
//     assert.typeOf(Random.getUpperInt, 'function')
//   })
//
//   it('throws an error if degree is NaN', () => {
//     assert.throw(Random.getUpperInt.bind(this, 'degree'))
//   })
//
//   it('throws an error if degree is equal to zero', () => {
//     assert.throw(Random.getUpperInt.bind(this, 0))
//   })
//
//   it('returns the largest one-digit number', () => {
//     assert.strictEqual(Random.getUpperInt(1), 9)
//   })
//
//   it('returns the largest n-digit number', () => {
//     assert.strictEqual(Random.getUpperInt(5), 99999)
//   })
// })
//
// test('Randomly#create', (t) => {
//   t.plan(8)
//   it('exists', () => {
//     assert.typeOf(Random.create, 'function')
//   })
//
//   it('throws an error if length is NaN', () => {
//     assert.throw(Random.create.bind(this, Number, '0'))
//   })
//
//   it('creates a string', () => {
//     let string = Random.create(String, 5)
//     assert.lengthOf(string, 5)
//     assert.typeOf(string, 'string')
//   })
//
//   it('creates a number', () => {
//     let number = Random.create(Number, 5)
//     assert.lengthOf(number.toString(), 5)
//     assert.typeOf(number, 'number')
//   })
//
//   it('creates an object', () => {
//     let object = Random.create(Object, 5)
//     assert.lengthOf(object.key, 5)
//     assert.typeOf(object, 'object')
//   })
// })
//
// test('Randomly#collection', (t) => {
//   t.plan(13)
//   it('exists', () => {
//     assert.typeOf(Random.collection, 'function')
//   })
//
//   it('throws an error if quantity is NaN', () => {
//     assert.throw(Random.collection.bind(this, Number, '0', 1))
//   })
//
//   it('throws an error if length is NaN', () => {
//     assert.throw(Random.collection.bind(this, Number, 1, '0'))
//   })
//
//   it('throws an error if quantity is less than zero', () => {
//     assert.throw(Random.collection.bind(this, Number, -1, 1))
//   })
//
//   it('throws an error if length is zero', () => {
//     assert.throw(Random.collection.bind(this, Number, 1, 0, true))
//   })
//
//   it('creates an empty array', () => {
//     let array = Random.collection(Number, 0, 1)
//     assert.lengthOf(array, 0)
//     assert.deepEqual(array, [])
//   })
//
//   it('creates an array of strings', () => {
//     let array = Random.collection(String, 5)
//     assert.lengthOf(array, 5)
//     array.forEach(s => assert.typeOf(s, 'string'))
//   })
//
//   it('creates an array of numbers', () => {
//     let array = Random.collection(Number, 5)
//     assert.lengthOf(array, 5)
//     array.forEach(s => assert.typeOf(s, 'number'))
//   })
//
//   it('creates an array of objects', () => {
//     let array = Random.collection(Object, 5)
//     assert.lengthOf(array, 5)
//     array.forEach(s => assert.typeOf(s, 'object'))
//   })
// })
//
// test('Randomly#sort', (t) => {
//   t.plan(8)
//   it('exists', () => {
//     assert.typeOf(Random.sort, 'function')
//   })
//
//   it('sorts an empty array', () => {
//     assert.deepEqual(Random.sort([]), [])
//   })
//
//   it('sorts an array of numbers', () => {
//     let unsortedArray = Random.collection(Number, 100)
//     let sortedArray = Random.sort(unsortedArray)
//     assert.lengthOf(sortedArray, unsortedArray.length)
//     assert.notDeepEqual(sortedArray, unsortedArray)
//   })
//
//   it('sorts an array of strings', () => {
//     let unsortedArray = Random.collection(String, 100)
//     let sortedArray = Random.sort(unsortedArray)
//     assert.lengthOf(sortedArray, unsortedArray.length)
//     assert.notDeepEqual(sortedArray, unsortedArray)
//   })
//
//   it('sorts an array of objects', () => {
//     let unsortedArray = Random.collection(Object, 100)
//     let sortedArray = Random.sort(unsortedArray)
//     assert.lengthOf(sortedArray, unsortedArray.length)
//     assert.notDeepEqual(sortedArray, unsortedArray)
//   })
// })
