// @flow
import EventEmitter from 'events';

class Store extends EventEmitter {
  count: number

  getCount(): number {
    return this.count;
  }

  emitChange() {
    this.emit('changeEvent');
  }

  addChangeListener(callback) {
    this.on('changeEvent', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('changeEvent', callback);
  }
}

export default new Store();
