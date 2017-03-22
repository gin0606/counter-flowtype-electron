// @flow
import EventEmitter from 'events';
import dispatcher from 'dispatcher';

class Store extends EventEmitter {
  count: number
  actionHandler: () => void

  constructor() {
    super();
    this.actionHandler = this.actionHandler.bind(this);
    dispatcher.register(this.actionHandler);
  }

  actionHandler(payload: any) {
    switch (payload.actionType) {
      case 'INCREMENT':
        this.count += 1;
        break;
      case 'DECREMENT':
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
