# Randomly

Randomly generate and sort data.

## Installation

Run `npm install --save randomly` to add `randomly` to your project.

## API Reference

* [randomly](#module_randomly)
    * [.string(length)](#module_randomly.string) ⇒ <code>string</code>
    * [.int(min, max)](#module_randomly.int) ⇒ <code>number</code>
    * [.getLowerInt(degree)](#module_randomly.getLowerInt) ⇒ <code>number</code>
    * [.getUpperInt(degree)](#module_randomly.getUpperInt) ⇒ <code>number</code>
    * [.create(type, length)](#module_randomly.create) ⇒ <code>string</code> &#124; <code>number</code> &#124; <code>Object</code>
    * [.collect(type, quantity, length)](#module_randomly.collect) ⇒ <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;Object&gt;</code>
    * [.sort(array)](#module_randomly.sort) ⇒ <code>Array</code>

<a name="module_randomly.string"></a>
### randomly.string(length) ⇒ <code>string</code>
Creates a random string.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>string</code> - The random string.  
**Throws**:

- <code>TypeError</code> Argument length must be a number
- <code>RangeError</code> Argument length must be greater than or equal to 0


| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | The desired string length. |

<a name="module_randomly.int"></a>
### randomly.int(min, max) ⇒ <code>number</code>
Creates a random number within a range.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>number</code> - The random number.  
**Throws**:

- <code>TypeError</code> Argument min must be a number
- <code>TypeError</code> Argument max must be a number


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The lower bound. |
| max | <code>number</code> | The upper bound. |

<a name="module_randomly.getLowerInt"></a>
### randomly.getLowerInt(degree) ⇒ <code>number</code>
Calculates the smallest n-digit number.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>number</code> - The smallest n-digit number.  
**Throws**:

- <code>TypeError</code> Argument degree must be a number
- <code>RangeError</code> Argument degree must be greater than or equal to 0


| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | The number of digits. |

<a name="module_randomly.getUpperInt"></a>
### randomly.getUpperInt(degree) ⇒ <code>number</code>
Calculates the largest n-digit number.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>number</code> - The largest n-digit number.  
**Throws**:

- <code>TypeError</code> Argument degree must be a number
- <code>RangeError</code> Argument degree must be greater than or equal to 0


| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | The number of digits. |

<a name="module_randomly.create"></a>
### randomly.create(type, length) ⇒ <code>string</code> &#124; <code>number</code> &#124; <code>Object</code>
Creates a random string, number or object.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>string</code> &#124; <code>number</code> &#124; <code>Object</code> - The random string, number or object.  
**Throws**:

- <code>TypeError</code> Argument length must be a number
- <code>RangeError</code> Argument length must be greater than or equal to 0


| Param | Type | Description |
| --- | --- | --- |
| type | <code>function</code> | The type to create (e.g. String, Number or Object). |
| length | <code>number</code> | The length (for strings and Objects) or boundary degree (for numbers). |

<a name="module_randomly.collect"></a>
### randomly.collect(type, quantity, length) ⇒ <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;Object&gt;</code>
Creates an array of random strings, numbers or objects.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;Object&gt;</code> - The array of random strings, numbers or objects.  
**Throws**:

- <code>TypeError</code> Argument quantity must be a number
- <code>RangeError</code> Argument quantity must be greater than 0
- <code>TypeError</code> Argument length must be a number
- <code>RangeError</code> Argument length must be greater than or equal to 0


| Param | Type | Description |
| --- | --- | --- |
| type | <code>function</code> | The type to create (e.g. String, Number or Object). |
| quantity | <code>number</code> | The quantity to create. |
| length | <code>number</code> | The length (for strings and Objects) or boundary degree (for numbers). |

<a name="module_randomly.sort"></a>
### randomly.sort(array) ⇒ <code>Array</code>
Sorts an array in random order.

**Kind**: static method of <code>[randomly](#module_randomly)</code>  
**Returns**: <code>Array</code> - The sorted array.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to sort. |


## Testing

`randomly` includes several unit tests. After cloning the `randomly` repo locally, run `npm install` in the project folder to install dependencies. Run `npm run build` to update the built library, then `npm test` to execute the tests.
