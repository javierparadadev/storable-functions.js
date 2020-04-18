# Storable functions

![GitHub](https://img.shields.io/github/license/habinari/storable-functions.js)
![npm](https://img.shields.io/npm/v/storable-functions)
![](https://github.com/habinari/storable-functions.js/workflows/tests/badge.svg)

Storable and executable functions using array based simple syntax and functional programming.

## Getting Started

### Install

```Shell
  npm install storable-functions
```

```Shell
  yarn add storable-functions
```

### Example usage

#### Basic sample

```javascript
  const { resolve } = require('storable-functions')

  const operation = [ '+', 3, 4 ] // (3 + 4)

  console.log(resolve(operation))
  // output: 7
```

#### Nested sample

```javascript
  const operation = [ 'mod', ['+', 3, 7], 3 ] // (3 + 7) % 3
  console.log(resolve(operation))
  // output: 1
```

#### Higher order sample

```javascript
  const operation = [
    'map', // map function
    'num', // argument variable name
    [ '+', 3, [ 'arg', 'num' ] ], // lambda
    ['array', 1, 2, 3] ] // data

  /* In js:
    [1, 2, 3].map(num => num + 3)
  */

  console.log(resolve(operation))

  // output: [4, 5, 6]
```

### Operations

#### Math module

| Operation           | Token       | Params                        |  Sample            |  Output |
|:--------------------|:-----------:|:------------------------------|:-------------------|:--------|
| Sum                 | +           | x: Number, y: Number          | ["+", 3, 4]        | 7       |
| Subtraction         | -           | x: Number, y: Number          | ["-", 9, 4]        | 5       |
| Multiplication      | *           | x: Number, y: Number          | ["*", 2, 7]        | 14      |
| Division            | /           | x: Number, y: Number          | ["/", 6, 3]        | 2       |
| Module              | mod         | x: Number, y: Number          | ["mod", 4, 3]      | 1       |
| Absolute value      | abs         | x: Number                     | ["abs", -4]        | 4       |
| Arithmetic mean     | avg         | ...n: Number                  | ["avg", 4, 6, 5]   | 5       |


#### Logic module

| Operation           | Token       | Params                        |  Sample                                               |  Output |
|:--------------------|:-----------:|:------------------------------|:------------------------------------------------------|:--------|
| And                 | and         | x: Boolean, y: Boolean        | ["and", true, false]                                  | false   |
| Or                  | or          | x: Boolean, y: Boolean        | ["or", true, false]                                   | true    |
| Not                 | not         | x: Boolean                    | ["not", true]                                         | false   |
| Equals              | ==          | x: any, y: any                | ["==", 1, 1]                                          | true    |
| Conditional 1       | if          | f1: Function, x: any          | ["if", ["==", 1, 1], 4]                               | 4       |
| Conditional 2       | elseif      | f1: Function, x: any          | ["if", ["==", 1, 2], 4, "elseif", ["==", 1, 1], 5]    | 5       |
| Conditional 3       | else        | x: any                        | ["if", ["==", 1, 2], 4, "else", 7]                    | 7       |


## Contributors

* **Javier Parada** - [@habinari](https://github.com/habinari)

See also the list of [contributors](https://github.com/habinari/storable-functions.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE]([LICENSE.md](https://github.com/habinari/storable-functions.js/blob/master/LICENSE)) file for details.

