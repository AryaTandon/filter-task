# Filter exercises

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is all about familiarising yourself with the filter function,practicing how you pass functions from place to place and reinforcing your udnerstanding of the different ways to express functions.

## Learning Outcomes

- Pass a function expression into filter
- Pass an arrow function into filter
- Pass an anonymous arrow function into filter

## Exercise 1: `.filter` with function expressions

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/0-exercises`, using helper function expressions

The folder `src/` has a few examples of `.filter` (both tests and passing code, which you should review together).

MDN also has good [examples of the `.filter` method on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

Use these to help you to write the code needed to pass the tests in `src/0-exercises`, _in the same style as the examples_, i.e.:

1. Defining a separate helper function using a function expression
2. Passing that function expression to the array's `.filter` method

## Exercise 2: `.filter` with separate arrow functions

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/0-exercises`, using helper arrow functions

The examples in `src/0-examples` have some commented out code with some arrow function equivalents to the function expressions:

Comment out the function expressions and de-comment the arrow functions - the tests with `yarn test 0-examples` should all still pass. (Instead of passing in a function expression, they're passing in an arrow function.)

See if you can refactor the code in `0-exercises` to use the arrow function syntax.

## Exercise 3: `.filter` with explicitly typed anonymous arrow function callbacks

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/0-exercises`, using anonymous arrow functions

The examples in `src/0-examples` have some commented out code which uses in-line arrow functions:

```ts
function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(isEven);
}

...

// function getEvenNumbers(numbers: number[]): number[] {
//     return numbers.filter((n: number) => n % 2 === 0);
//     // return numbers.filter((n) => n % 2 === 0);
// }
```

Comment out the first function expressions and de-comment the latter ones.

There _should_ still be one line still commented out - when you de-comment the function expression above, you should get the following:

```ts
function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((n: number) => n % 2 === 0);
    // return numbers.filter((n) => n % 2 === 0);
}
```

The relevant tests should still all pass. (Instead of passing in a reference to an arrow function to `.filter`, you're passing in an in-line anonymous arrow function.)

See if you can refactor the code in `0-exercises` to use this in-line arrow function expression syntax.

## Exercise 4: `.filter` with implicitly typed anonymous arrow function callbacks

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/0-exercises`, using anonymous arrow functions

Currently, the examples in `src/0-exercises` are using solutions like this:

```ts
function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((n: number) => n % 2 === 0);
    // return numbers.filter((n) => n % 2 === 0);
}
```

Comment out the first return and de-comment the first return.

```ts
function getEvenNumbers(numbers: number[]): number[] {
    // return numbers.filter((n: number) => n % 2 === 0);
    return numbers.filter((n) => n % 2 === 0);
}
```

The relevant tests should all still pass - and _TypeScript won't complain_.

On strict mode, TypeScript _won't_ let us define the below function (try it):

```ts
const isEven = (n) => n % 2 === 0;
```

but it happily accepts the anonymous arrow function `(n) => n % 2 === 0` inside `numbers.filter`.

Why?

Hover over the `n` in VS Code, and you will see that TypeScript has typed `n` as `number`.

Essentially, this is because we've typed the `numbers` parameter as `number[]` - and, when we call `.filter` on a `number[]`, TypeScript knows that we're iterating over `number`s, and so the anonymous callback function's first argument _has_ to be a `number`.

If you make the relevant changes to all the examples, the associated tests should all still pass.

See if you can refactor the code in `0-exercises` to use this in-line arrow function expression syntax with inferred typing.