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

```javascript
  const { resolve } = require('storable-functions')

  const operation = [ '+', 3, 4 ]

  console.log(resolve(operation))
  // output: 7
```

### Operations

#### Math module

| Operation           | Token       | Params                        |  Sample            |  Output |
|:--------------------|:-----------:|:------------------------------|:-------------------|:--------|
| Sum                 | +           | x: Number, y: Number          | ["+", 3, 4]        | 7       |
| Subtraction         | -           | x: Number, y: Number          | ["-", 9, 4]        | 5       |
| Multiplication      | *           | x: Number, y: Number          | ["*", 2, 7]        | 14      |
| Division            | /           | x: Number, y: Number          | ["abs", 4, 6]      | 5       |
| Module              | mod         | x: Number, y: Number          | ["mod", 4, 3]      | 1       |
| Absolute value      | abs         | x: Number                     | ["abs", 4, 6, 5]   | 5       |
| Arithmetic mean     | avg         | ...n: Number                  | ["abs", 4, 6, 5]   | 5       |


#### Logic module

| Operation           | Token       | Params                        |  Sample                                               |  Output |
|:--------------------|:-----------:|:------------------------------|:------------------------------------------------------|:--------|
| Equals              | ==          | x: any, y: any                | ["==", 1, 1]                                          | true    |
| Conditional 1       | if          | f1: Function, x: any          | ["if", ["==", 1, 1], 4]                               | 4       |
| Conditional 2       | elseif      | f1: Function, x: any          | ["if", ["==", 1, 2], 4 "elseif", ["==", 1, 1], 5]     | 5       |
| Conditional 3       | else        |                               | ["if", ["==", 1, 2], 4 "else", 7]                     | 7       |
| And                 | and         | x: Boolean, y: Boolean        | ["and", true, false]                                  | false   |
| Or                  | or          | x: Boolean, y: Boolean        | ["or", true, false]                                   | true    |
| Not                 | not         | x: Boolean                    | ["not", true]                                         | false    |


## Contributors

* **Javier Parada** - [@habinari](https://github.com/habinari)

See also the list of [contributors](https://github.com/habinari/storable-functions.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE]([LICENSE.md](https://github.com/habinari/storable-functions.js/blob/master/LICENSE)) file for details.

