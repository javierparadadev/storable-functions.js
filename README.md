# Storable functions

![GitHub](https://img.shields.io/github/license/parada3desu/storable-functions.js)
![npm](https://img.shields.io/npm/v/storable-functions)
![](https://github.com/parada3desu/storable-functions.js/workflows/tests/badge.svg)

Storable and executable functions using array based simple syntax and functional programming.

## Getting Started

### Installation

```Shell
  npm install storable-functions
```

### Run tests

```Shell
  npm run-script test
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
    ['array', 1, 2, 3] // data
  ]

  /* In js:
    [1, 2, 3].map(num => num + 3)
  */

  console.log(resolve(operation))

  // output: [4, 5, 6]
```


### Operations

#### Math module

| Operation           | Token       | Params                        |  Sample                       |  Output |
|:--------------------|:-----------:|:------------------------------|:------------------------------|:--------|
| Sum                 | +           | x: Number, y: Number          | ["+", 3, 4]                   | 7       |
| Subtraction         | -           | x: Number, y: Number          | ["-", 9, 4]                   | 5       |
| Multiplication      | *           | x: Number, y: Number          | ["*", 2, 7]                   | 14      |
| Division            | /           | x: Number, y: Number          | ["/", 6, 3]                   | 2       |
| Module              | mod         | x: Number, y: Number          | ["mod", 4, 3]                 | 1       |
| Absolute value      | abs         | x: Number                     | ["abs", -4]                   | 4       |
| Floor               | floor       | x: Number                     | ["floor", 7.2]                | 7       |
| Ceil                | ceil        | x: Number                     | ["ceil", 7.2]                 | 8       |
| Trunc               | trunc       | x: Number                     | ["trunc", 7.2]                | 7       |
| Round               | round       | x: Number                     | ["round", 7.9]                | 8       |
| Square root         | sqrt        | x: Number                     | ["sqrt", 4]                   | 2       |
| Cubic root          | cbrt        | x: Number                     | ["cbrt", 8]                   | 2       |
| Arithmetic mean     | avg         | f: Function<Number[]>         | ["avg", ["array", 4, 6, 5]]   | 5       |
| Power               | ^           | x: Number, y: Number          | ["^", 2, 2]                   | 4       |
| Hypotenuse          | hypot       | x: Number, y: Number          | ["hypot", 1, 2, 2]            | 3       |
| Maximum             | max         | f: Function<Number[]>         | ["max", ["array", 2, 3, 4]]   | 4       |
| Minimum             | min         | f: Function<Number[]>         | ["min", ["array", 2, 3, 4]]   | 2       |


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


### Higher order functions

| Operation           | Token       | Params                                                                        |  Sample                                                                                 |  Output     |
|:--------------------|:-----------:|:------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|:------------|
| Map                 | map         | argName: string, f: Function<any>, l: Function<[]>                            | ["map", "num", ["+", ["arg", "num"], 1], ["array", 1, 2, 3]]                            | [2, 3, 4]   |
| Foldl               | foldl       | argName: string, accumulatorName: string, f: Function<any>, l: Function<[]>   | ["foldl", "num", 3, "acc", ["^", ["arg", "acc"], ["arg", "num"]], ["array", 1, 2, 3]]   | 19683       |
| Foldr               | foldr       | argName: string, accumulatorName: string, f: Function<any>, l: Function<[]>   | ["foldr", "num", 3, "acc", ["^", ["arg", "acc"], ["arg", "num"]], ["array", 1, 2, 3]]   | 6561        |
| Filter              | filter      | argName: string, f: Function<bool>, l: Function<[]>                           | ["filter", "num", ["==", ["arg", "num"], 0], ["array", 0, 1, 2]]                        | [0]         |
| Find                | find        | argName: string, f: Function<bool>, l: Function<[]>                           | ["find", "num", ["==", ["arg", "num"], 1], ["array", 0, 1, 2]]                          | 1           |
| Every               | every       | argName: string, f: Function<bool>, l: Function<[]>                           | ["every", "num", ["==", ["arg", "num"], 0], ["array", 0, 0, 0]]                         | true        |
| Some                | some        | argName: string, f: Function<bool>, l: Function<[]>                           | ["some", "num", ["==", ["arg", "num"], 1], ["array", 0, 1, 2]]                          | true        |
| Sort                | sort        | argName1: string, argName2: string, f: Function<number>, l: Function<[]>      | ["sort", "num1", "num2", ["-", ["arg", "num2"], ["arg", "num1"]], ["array", 3, 2, 1]]   | [1, 2, 3]   |


## Contributors

See also the list of [contributors](https://github.com/parada3desu/storable-functions.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE]([LICENSE.md](https://github.com/parada3desu/storable-functions.js/blob/master/LICENSE)) file for details.

