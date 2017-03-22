// @flow
import EventEmitter from 'events';
import dispatcher from 'dispatcher';
import type { Action } from 'action/Actions';

class Store extends EventEmitter {
  count: number
  actionHandler: () => void

  constructor() {
    super();

    this.count = 0;

    this.actionHandler = this.actionHandler.bind(this);
    dispatcher.register(this.actionHandler);
  }

  actionHandler(action: Action) {
    switch (action.type) {
      case 'increment':
        this.count += 1;
        break;
      case 'decrement':
        this.count -= 1;
        break;
      default:
        return;
    }
    this.emitChange();
  }

  getCount(): number {
    return this.count;
  }

  emitChange() {
    this.emit('changeEvent');
  }

  addChangeListener(callback: () => void) {
    this.on('changeEvent', callback);
  }

  removeChangeListener(callback: () => void) {
    this.removeListener('changeEvent', callback);
  }
}

export default new Store();
