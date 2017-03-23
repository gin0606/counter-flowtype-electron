// @flow
import dispatcher from 'dispatcher';
import { ReduceStore } from 'flux/utils';
import type { Action } from 'action/Actions';

type State = { count: number };

class Store extends ReduceStore<Action, State> {
  constructor() {
    super(dispatcher);
  }

  getInitialState(): State {
    return { count: 0 };
  }

  reduce(state: State, action: Action): State {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
}

export default new Store();
