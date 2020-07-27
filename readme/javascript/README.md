# index

- [keyword arguments](#keyword-arguments)
- [reduce](#reduce)
- [flat](#flat)
- [filter](#filter)
- [sort](#sort)
- [includes](#includes)
- [every](#every)
- [JSON.stringify](#json)
- [Set](#set)
- [RegEx](#regex)
- [Fetch](#fetch)
- [parseInt](#parseint)

## keyword `arguments`

- JavaScript functions have a `built-in` object called the arguments object.
- **Example**

```js
const func = function (items) {
  return arguments;
};
console.log(func(1, 5, 13)); // output [Arguments] { '0': 1, '1': 5, '2': 13 }
```

```js
const func = function (items) {
  return Array.from(arguments);
};
console.log(func(1, 5, 13)); //output [1, 5, 13]
```

or using `Spread operator` in `destructuring`

```js
const func = function (items) {
  return [...arguments];
};
console.log(func(1, 5, 13)); //output [1, 5, 13]
```

| [Go Index](#index 'Go Index') |
| ----------------------------- |
|                               |

## `reduce()`

- `reduce()` is an array method and reduces it to a single value.
- **`Syntax`**

```js
array.reduce((total, currentValue, currentIndex, arr) => {
  // some statements
}, initialValue);
```

- **`Example`**

```js
const total = function (nums) {
  return nums.reduce((total, item) => total + item, 0);
};
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //output 55
```

| [read more...][1]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## `flat()`

- `flat()` is an array method and creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- **`Syntax`**

```js
let newArray = arr.flat(depth);
```

> The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
>
> `Infinity` to go infinity deep in the array
>
> remove empty items.

- **`Example`**

```js
const func = function (arr) {
  return arr.flat(Infinity);
};
console.log(func([[1, , [2, 2, [3, [4, [5, [6]]]]], 1]])); //output [1, 2, 2, 3, 4, 5, 6, 1]
```

| [read more...][2]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## `filter()`

- `filter()` is an array method creates an array filled with all array elements that pass a test and does not change the original array.

- **`Syntax`**

```js
array.filter((currentValue, index, arr) => {
  //some statements
}, thisValue);
```

- **`Example`** Create a function that takes an array of strings and returns an array with only the strings that have numbers in them.

```js
const numInStr = function (arr) {
  return arr.filter((item) => /\d/.test(item));
};
console.log(numInStr(['-/>', '10bc', 'abc '])); //output [ '10bc' ]
```

| [read more...][3]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## sort()

- `sort()` is an array method that sorts its items and can be either alphabetic or numeric, ascending or descending.
- **`Syntax`**

```js
arr.sort([compareFunction]);
```

- **`Example 1`**

```js
const sortItems = function (fruits) {
  return fruits.sort();
};
console.log(sortItems(['Banana', 'Orange', 'Apple', 'Mango'])); //output [ 'Apple', 'Banana', 'Mango', 'Orange' ]
```

- **`Example 2`**

```js
const sortNumbers = function (arr) {
  return arr.sort((a, b) => a - b);
};
console.log(sortNumbers([10, 5, 1, 15, 7, 3, 6, 0, -5])); //output [-5, 0,  1,  3, 5, 6, 7, 10, 15]
```

| [read more...][4]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## includes()

- `includes()` is an `array / text` method determines whether an `array / text` contains a specified element and returns true if the `array / text` contains the element, and false if not.
- The `includes()` method is case sensitive.
- **`Synatx`**

```js
array.includes(element, [start]);
string.includes(searchvalue, [start]);
/*start (Optional) At which position in the array / text to start the search, default 0*/
```

| [read more...][5]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## every()

- `every()` is an array method checks if all elements in an array pass a test (provided as a function) and returns a Boolean value.
- **`Syntax`**

```js
arr.every((item, index, array) => {
  // test statement
});
```

- **`Example`** An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

```js
function isSpecialArray(arr) {
  return arr.every((item, index) => index % 2 == item % 2);
}
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); //output true
```

| [read more...][6]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## JSON

- `JSON.stringify()` method converts a JavaScript object to a JSON string.
- **`Example`** Create a function that returns `true` if smaller arrays can concatenate to form the target array and `false` otherwise.

```js
const canConcatenate = function (arr, target) {
  return (
    JSON.stringify(arr.flat(Infinity).sort((a, b) => a - b)) ==
    JSON.stringify(target.sort((a, b) => a - b))
  );
};
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
); // output false
```

| [read more...][7]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## Set

- The `Set` constructor lets you create Set objects that store unique values of any type, whether [primitive values][8] or `object references`.

- **`Syntax`**

```js
new Set([iterable]);
/*
 If an iterable object is passed, all of its elements will be added to the new Set.
 If you don't specify this parameter, or its value is null, the new Set is empty.
*/
```

```js
set.add(value); // Appends value to the Set object.
set.delete(value); // removes value, returns true if the value exists at the moment of the call, otherwise false.
set.has(value); // returns true if the value exists in the set, otherwise false.
set.clear(); // removes everything from the set.
set.size; // Returns the number of values in the Set object.
```

- example

```js
const countLayers = function (rug) {
  return new Set(rug).size;
};
console.log(countLayers(['AAAA', 'AAAA', 'AAAA'])); //output 1
```

| [read more...][9]             |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## RegEx

- Regular expressions are patterns used to match character combinations in strings.
- **`Syntax`**

```js
/ pattern / modifiers;
```

### Quantifiers

| Shorthand |                                          |
| --------- | ---------------------------------------- |
| +         | Means `one or more`, the same as `{1,}`  |
| ?         | Means `zero or one`, the same as `{0,1}` |
| \*        | Means `zero or more`, the same as `{0,}` |
|           | [read more...][10]                       |

### Methods

|                                    |                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------- |
| str.match(regex)                   | return an `array` of all matches, if there is no matches `null` is returned |
| regex.test(str)                    | looks for a match and returns `true/false` whether it exists                |
| str.replace(str\|regex, str\|func) | for searching and replacing                                                 |

- The second argument is a replacement string. We can use special character in it:

| Symbol    | Action                                        |
| --------- | --------------------------------------------- |
| \$&       | inserts the whole match                       |
| \$\`      | inserts a part of the string before the match |
| \$'       | inserts a part of the string after the match  |
| \$n       |                                               |
| \$\<name> |                                               |
| \$\$      | inserts character \$                          |

| [read more...][11]            |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## Fetch

| [read more...][12]            |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

## parseInt

- The `parseInt()` function parses a string and returns an integer.
- **`Syntax`**

```js
parseInt(string, radix);
```

| [read more...][13]            |
| ----------------------------- |
| [Go Index](#index 'Go Index') |

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce "'ctrl + mouse click to open the link in a new Tab'"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat "'ctrl + mouse click to open the link in a new Tab'"
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "'ctrl + mouse click to open the link in a new Tab'"
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "'ctrl + mouse click to open the link in a new Tab'"
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes "'ctrl + mouse click to open the link in a new Tab'"
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every "'ctrl + mouse click to open the link in a new Tab'"
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "'ctrl + mouse click to open the link in a new Tab'"
[8]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive "'ctrl + mouse click to open the link in a new Tab'"
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set "'ctrl + mouse click to open the link in a new Tab'"
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers "'ctrl + mouse click to open the link in a new Tab'"
[11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers "'ctrl + mouse click to open the link in a new Tab'"
[12]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch "'ctrl + mouse click to open the link in a new Tab'"
[13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt "'ctrl + mouse click to open the link in a new Tab'"
