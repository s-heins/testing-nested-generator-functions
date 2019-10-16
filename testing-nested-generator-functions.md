# Testing nested generator functions in JavaScript

- [Testing nested generator functions in JavaScript](#testing-nested-generator-functions-in-javascript)
  - [Introduction to generator functions](#introduction-to-generator-functions)
  - [Nested generator functions](#nested-generator-functions)

Rough draft

- introduction to generator functions
  - included in ES6 (ES2015)
  - what are they used for?
  - generators in plain js vs redux (-saga)
    - is there this distinction `yield` vs `yield*` / parallel vs sequential execution in plain js?
  - introduction to redux(-saga)
    - usage
      - redux
        - state management in React apps
      - saga
        - middleware for redux
          - responds to actions and can throw other actions
          - those may be used by another saga or a redux reducer
          - the reducer then returns the new state
        - sagas are generator functions
    - difference between calling generators with `yield` or `yield*`
      - `yield`: parallel execution
      - `yield*`: sequential execution
- how to test generator functions
  - just one
  - nested generator functions
    - with `yield`
    - with `yield*`

## Introduction to generator functions

Generator functions are an ES6 (ES2015) feature. They are functions that can run asynchronously and return an iterator, or more specifically, a [generator object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).

The syntax looks like this:

```js
function* myGenerator() {
  yield 4;
  yield 5;
}
```

It is possible to execute generator functions step-by-step because they return an iterator:

When calling the iterator's `next()` method, the generator is executed until the first yield.
Each call to `next` returns an object with a `value` which contains the output of the yield call and a `done` attribute.
We can then run some other code and resume execution later on by calling `iterator.next()` again.
After the last yield call, the generator will have finished. It's `value` will be `undefined` and `done` will be `true`.

```js
const myIterator = myGenerator();

console.log(myIterator.next()); // { value: 4, done: false }
console.log(myIterator.next()); // { value: 5, done: false }
console.log(myIterator.next()); // { value: undefined, done: true }
```

Thus, a generator can return a series of values, one for each `yield` call instead of just returning one value like a normal function.

To read more about generator functions, please have a look at the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

## Nested generator functions

Within a generator function, we use `yield` to return a value or `yield*` to delegate execution to another generator function. This article will focus on how to test the latter.

Please have a look at the MDN documentation if you want to read more about the [yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield) or [yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*) expressions.

For Redux Saga: While `yield` executes functions in parallel, `yield*` calls each sequentially.
