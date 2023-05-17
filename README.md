# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm i @takik/lotide`

**Require it:**

`const _ = require('@takik/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Compares and asserts two arrays
* `function2(assertEqual)`: Compares two given inputs and asserts.
* `function3(assertObjectsEqual)`: Compares and asserts two Objects.
* `function4(countLetters)`: Counts instance of that letter in the given word.
* `function5(countOnly)`: Count the instances of given names in a given array of names.
* `function6(eqArrays)`: Compare two arrays.
* `function7(eqObjects)`: Compare two objects.
* `function8(findKey)`: Returns the key to an object where the number is given.
* `function9(findKeyByValue)`: Return the name of the movie in a given genre.
* `function10(head)`: Returns first element of an array.
* `function11(letterPositions)`: Returns the position of letter in a string.
* `function12(map)`: This will return a new array based on the result of the callback function.
* `function13(middle)`: Returns middle of array.
* `function14(tail)`: Returns tail of array.
* `function15(takeUntil)`: A Function that takes an array and callback function as arguments. it will return all the element of the array until the callback function returns true.
* `function16(without)`:A Function that takes two arrays as arguments and returns a new array containing all the elements of first array except the ones that were in a second array.

