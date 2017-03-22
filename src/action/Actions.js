// @flow
import dispatcher from 'dispatcher';

export function increment() {
  dispatcher.dispatch({
    type: 'increment',
  });
}

export function decrement() {
  dispatcher.dispatch({
    type: 'decrement',
  });
}

export default {
  increment,
  decrement,
};
