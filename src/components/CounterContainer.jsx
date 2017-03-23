// @flow
import Store from 'store/Store';
import dispatcher from 'dispatcher';
import { Container } from 'flux/utils';
import Counter from './Counter';

function getStores(): Array<any> {
  return [
    Store,
  ];
}

function getState() {
  return Object.assign({}, Store.getState(), {
    onClickIncrement: () => {
      dispatcher.dispatch({ type: 'increment' });
    },
    onClickDecrement: () => {
      dispatcher.dispatch({ type: 'decrement' });
    },
  });
}

export default Container.createFunctional(Counter, getStores, getState);
