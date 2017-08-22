import Randomly from '../lib/randomly'
import test from 'tape'

test('Randomly#string', t => {
  t.plan(8)

  t.ok(Randomly.string instanceof Function, 'exists')
  t.throws(
    Randomly.string.bind(this, 'length'),
    'throws an error if length is NaN'
  )
  t.throws(
    Randomly.string.bind(this, -1),
    'throws an error if length is less than zero'
  )
  t.equal(Randomly.string(0), '', 'returns a zero-length string')
  t.equal(Randomly.string(5).length, 5, 'returns a string of length 5')
  t.equal(Randomly.string(21).length, 21, 'returns a string of length 21')
  t.equal(typeof Randomly.string(5), 'string', 'returns a string')
  t.ok(
    /[a-zA-Z0-9]/.test(Randomly.string(5)),
    'returns a string of lowercase letters, uppercase letters and numbers'
  )
})

test('Randomly#int', t => {
  t.plan(11)

  t.ok(Randomly.int instanceof Function, 'exists')
  t.throws(Randomly.int.bind(this, 'min', 1), 'throws an error if min is NaN')
  t.throws(Randomly.int.bind(this, 1, 'max'), 'throws an error if max is NaN')
  t.ok(
    Randomly.int(-1, -1000) < -1,
    'returns a random negative number below max'
  )
  t.ok(
    Randomly.int(-1, -1000) > -1000,
    'returns a random negative number above min'
  )
  t.ok(Randomly.int(1000, -1000) < 1000, 'returns a random number below max')
  t.ok(Randomly.int(1000, -1000) > -1000, 'returns a random number above min')
  t.ok(
    Randomly.int(1000, 1) < 1000,
    'returns a random positive number below max'
  )
  t.ok(Randomly.int(1000, 1) > 1, 'returns a random positive number above min')
  t.ok(
    Randomly.int(0, 1000) < 1000,
    'returns a random positive number below min (inverted min & max)'
  )
  t.ok(
    Randomly.int(0, 1000) > 0,
    'returns a random positive number above max (inverted min & max)'
  )
})

test('Randomly#getLowerInt', t => {
  t.plan(5)

  t.ok(Randomly.getLowerInt instanceof Function, 'exists')
  t.throws(
    Randomly.getLowerInt.bind(this, 'degree'),
    'throws an error if degree is NaN'
  )
  t.throws(
    Randomly.getLowerInt.bind(this, 0),
    'throws an error if degree is equal to zero'
  )
  t.equal(Randomly.getLowerInt(1), 0, 'returns the smallest one-digit number')
  t.equal(Randomly.getLowerInt(5), 10000, 'returns the smallest n-digit number')
})

test('Randomly#getUpperInt', t => {
  t.plan(5)

  t.ok(Randomly.getUpperInt instanceof Function, 'exists')
  t.throws(
    Randomly.getUpperInt.bind(this, 'degree'),
    'throws an error if degree is NaN'
  )
  t.throws(
    Randomly.getUpperInt.bind(this, 0),
    'throws an error if degree is equal to zero'
  )
  t.equal(Randomly.getUpperInt(1), 9, 'returns the largest one-digit number')
  t.equal(Randomly.getUpperInt(5), 99999, 'returns the largest n-digit number')
})

test('Randomly#create', t => {
  t.plan(9)

  t.ok(Randomly.create instanceof Function, 'exists')
  t.throws(
    Randomly.create.bind(this, Number, '0'),
    'throws an error if length is NaN'
  )
  t.throws(
    Randomly.create.bind(this, String, -1),
    'throws an error if length is less than zero'
  )
  t.equal(Randomly.create(String, 5).length, 5, 'creates a string of length 5')
  t.equal(typeof Randomly.create(String, 5), 'string', 'creates a string')
  t.equal(
    Randomly.create(Number, 5).toString().length,
    5,
    'creates a number of length 5'
  )
  t.equal(typeof Randomly.create(Number, 5), 'number', 'creates a number')
  t.equal(
    Randomly.create(Object, 5).key.length,
    5,
    'creates an object of length 5'
  )
  t.equal(typeof Randomly.create(Object, 5), 'object', 'creates an object')
})

test('Randomly#collection', t => {
  t.plan(25)

  t.ok(Randomly.collect instanceof Function, 'exists')
  t.throws(
    Randomly.collect.bind(this, Number, '0', 1),
    'throws an error if quantity is NaN'
  )
  t.throws(
    Randomly.collect.bind(this, Number, 1, '0'),
    'throws an error if length is NaN'
  )
  t.throws(
    Randomly.collect.bind(this, Number, -1, 1),
    'throws an error if quantity is less than zero'
  )
  t.throws(
    Randomly.collect.bind(this, Number, 1, 0, true),
    'throws an error if length is zero'
  )
  t.equal(
    Randomly.collect(Number, 0, 1).length,
    0,
    'creates a zero-length array'
  )
  t.deepEqual(Randomly.collect(Number, 0, 1), [], 'creates an empty array')
  t.equal(
    Randomly.collect(String, 5).length,
    5,
    'creates an array of strings of length 5'
  )
  Randomly.collect(String, 5).forEach(x =>
    t.equal(typeof x, 'string', 'creates an array of strings')
  )
  t.equal(
    Randomly.collect(Number, 5).length,
    5,
    'creates an array of numbers of length 5'
  )
  Randomly.collect(Number, 5).forEach(x =>
    t.equal(typeof x, 'number', 'creates an array of numbers')
  )
  t.equal(
    Randomly.collect(Object, 5).length,
    5,
    'creates an array of objects of length 5'
  )
  Randomly.collect(Object, 5).forEach(x =>
    t.equal(typeof x, 'object', 'creates')
  )
})

test('Randomly#sort', t => {
  t.plan(8)

  t.ok(Randomly.sort instanceof Function, 'exists')
  t.deepEqual(Randomly.sort([]), [], 'sorts an empty array')
  t.equal(
    Randomly.sort(Randomly.collect(Number, 100)).length,
    100,
    'sorts an array of numbers of length 100'
  )
  const c1 = Randomly.collect(Number, 100)
  t.notDeepEqual(Randomly.sort(c1), c1, 'sorts an array of numbers')
  t.equal(
    Randomly.sort(Randomly.collect(String, 100)).length,
    100,
    'sorts an array of strings of length 100'
  )
  const c2 = Randomly.collect(String, 100)
  t.notDeepEqual(Randomly.sort(c2), c2, 'sorts an array of strings')
  t.equal(
    Randomly.sort(Randomly.collect(Object, 100)).length,
    100,
    'sorts an array of objects of length 100'
  )
  const c3 = Randomly.collect(Object, 100)
  t.notDeepEqual(Randomly.sort(c3), c3, 'sorts an array of objects')
})
