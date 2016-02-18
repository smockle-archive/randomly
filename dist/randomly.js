
const Randomly = {};

Randomly.string = length => {
  if (!(length instanceof Number) && typeof length !== 'number' || length < 0) {
    throw new Error('Length must be a number greater than or equal to 0');
  }
  return (+new Date() * Math.random()).toString(36).substring(0, length);
};

Randomly.int = (min, max) => {
  if (!(min instanceof Number) && typeof min !== 'number') {
    throw new Error('Min must be a number');
  }
  if (!(max instanceof Number) && typeof max !== 'number') {
    throw new Error('Max must be a number');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

Randomly.getLowerInt = degree => {
  if (!(degree instanceof Number) && typeof degree !== 'number' || degree <= 0) {
    throw new Error('Degree must be a number greater than 0');
  }
  if (degree === 1) return 0;
  return Math.pow(10, degree - 1);
};

Randomly.getUpperInt = degree => {
  if (!(degree instanceof Number) && typeof degree !== 'number' || degree <= 0) {
    throw new Error('Degree must be a number greater than 0');
  }
  return Math.pow(10, degree) - 1;
};

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