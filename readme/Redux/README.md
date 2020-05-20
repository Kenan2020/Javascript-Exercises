# Redux

## Installation

```bash
npm i redux react-redux redux-thunk

```

## Provider

React Redux provides `<Provider />`, which makes Redux `store` available in your App.

## connect ()

React Redux provides a `connect` function to connect your component to the store.

## Actions

**Actions** are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the `store` using `store.dispatch()`.

**Actions** are plain JavaScript objects. Actions must have a `type` property that indicates the type of action being performed. Types should typically be defined as _string constants_. Once your app is large enough, you may want to move them into a separate module.

### Action Creators

**Action creators** are exactly that—functions that create actions.

In Redux, `action creators` simply return an action.

**action creators** often trigger a `dispatch` when invoked.

The `dispatch()` function can be accessed directly from the store as `store.dispatch()`, but more likely you'll access it using a helper like react-redux's `connect()`.

## Reducers

**Reducers** specify how the application's state changes in response to `actions` sent to the `store`. Remember that actions only describe _what happened_, but don't describe how the application's state changes.

The **reducer** is a pure function that takes the previous state and an action, and returns the next state.

```Javascript
(previousState, action)=> nextState
```

All **combineReducers()** does is generate a function that calls your reducers with the slices of state selected according to their keys, and combines their results into a single object again. And like other reducers, combineReducers() does not create a new object if all of the reducers provided to it do not change state.

## Store

We defined the `actions` that represent the facts about “what happened” and the `reducers` that update the state according to those actions.

The `Store` is the object that brings them together.

It's important to note that you'll only have a single store in a Redux application.

A **store** holds the whole `state tree` of your application. The only way to change the state inside it is to dispatch an `action` on it.

## dispatch(action)

Dispatches an action. This is the only way to trigger a state change.

## createStore

Creates a Redux `store` that holds the complete state tree of your app.

```javascript
createStore(reducer, [preloadedState], [enhancer]);
```

### Arguments

1. `reducer` _(Function)_: A `reducing function` that returns the next `state tree`, given the current state tree and an `action` to handle.

2. `[preloadedState]` _(any)_: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.

3. `[enhancer]` _(Function)_: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is `applyMiddleware()`.

### Returns

`(Store)`: An object that holds the complete state of your app. The only way to change its state is by dispatching actions.

## applyMiddleware(...middleware)

Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's `dispatch` method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.

The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like `Rx`. It does so by letting you dispatch `async actions` in addition to normal actions.

For example, `redux-thunk` lets the action creators invert control by dispatching functions. They would receive `dispatch` as an argument and may call it asynchronously. Such functions are called thunks. Another example of middleware is `redux-promise`. It lets you dispatch a `Promise` async action, and dispatches a normal action when the Promise resolves.

Middleware is not baked into `createStore` and is not a fundamental part of the Redux architecture, but we consider it useful enough to be supported right in the core. This way, there is a single standard way to extend `dispatch` in the ecosystem, and different middleware may compete in expressiveness and utility.

### Arguments

- `...middleware` _(arguments)_: Functions that conform to the Redux middleware API. Each middleware receives `Store`'s `dispatch` and `getState` functions as named arguments, and returns a function. That function will be given the `next` middleware's dispatch method, and is expected to return a function of `action` calling `next(action)` with a potentially different argument, or at a different time, or maybe not calling it at all. The last middleware in the chain will receive the real store's `dispatch` method as the `next` parameter, thus ending the chain. So, the middleware signature is `({ getState, dispatch }) => next => action.`

### Returns

- _(Function)_ A store enhancer that applies the given middleware. The store enhancer signature is `createStore => createStore` but the easiest way to apply it is to pass it to `createStore()` as the last enhancer argument.

## Thunk

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

## compose(...functions)

Composes functions from right to left.

This is a functional programming utility, and is included in Redux as a convenience. You might want to use it to apply several `store enhancers` in a row.

### Arguments

- _(arguments)_: The functions to compose. Each function is expected to accept a single parameter. Its return value will be provided as an argument to the function standing to the left, and so on. The exception is the right-most argument which can accept multiple parameters, as it will provide the signature for the resulting composed function.

### Returns

- _(Function)_: The final function obtained by composing the given functions from right to left.

### Example

This example demonstrates how to use `compose` to enhance a `store` with `applyMiddleware` and a few developer tools from the `redux-devtools` package.

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const intialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  intialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
```

## mapStateToProps

As the first argument passed in to `connect`, `mapStateToProps` is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just `mapState` for short.

- It is called every time the store state changes.
- It receives the entire store state, and should return an object of data this component needs.

`mapStateToProps` should be defined as a function:

```javascript
function mapStateToProps(state, ownProps)
```

It should take a first argument called `state`, optionally a second argument called `ownProps`, and return a plain `object` containing the data that the connected component needs.

This function should be passed as the first argument to `connect`, and will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass `null` or `undefined` to connect in place of mapStateToProps.

### Return

Your `mapStateToProps` function should return a plain object that contains the data the component needs:

- Each field in the object will become a prop for your actual component
- The values in the fields will be used to determine if your component needs to re-render

### Example

```javascript
const mapStateToProps = state => ({
  counter: state.counter.counter
});
```

|                              | `(state) => stateProps`                | `(state, ownProps) => stateProps`                                              |
| ---------------------------- | -------------------------------------- | ------------------------------------------------------------------------------ |
| `mapStateToProps` runs when: | store `state` changes                  | store `state` changes or any field of `ownProps` is different                  |
| component re-renders when:   | any fiels of `stateProps` is different | any field of `stateProps` is different or any field of `ownProps` is different |

## connect ()

The `connect()` function connects a React component to a Redux store.

It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

```javascript
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

### Parameters

`connect` accepts four different parameters, all optional. By convention, they are called:

1. `mapStateToProps?: Function`
2. `mapDispatchToProps?: Function | Object`
3. `mergeProps?: Function`
4. `options?: Object`

### Returns

The return of `connect()` is a wrapper function that takes your component and returns a wrapper component with the additional props it injects.

### Example

```javascript
const mapStateToProps = state => ({
  counter: state.counter.counter
});
export default connect(mapStateToProps, { addOne, subOne, addFive, subFive })(
  Counter
);
```
