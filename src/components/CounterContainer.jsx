// @flow
import React from 'react';
import Store from 'store/Store';
import dispatcher from 'dispatcher';
import Counter from './Counter';

export default class CounterContainer extends React.Component {
  state: {
    count: number,
  }
  onChange: () => void
  onClickIncrement: () => void
  onClickDecrement: () => void

  constructor(...args: any) {
    super(...args);

    this.state = {
      count: Store.getCount(),
    };

    this.onChange = this.onChange.bind(this);
    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      count: Store.getCount(),
    });
  }

  onClickIncrement() {
    dispatcher.dispatch({ type: 'increment' });
  }

  onClickDecrement() {
    dispatcher.dispatch({ type: 'decrement' });
  }

  render() {
    return (<div>
      <Counter
        count={this.state.count}
        onClickIncrement={this.onClickIncrement}
        onClickDecrement={this.onClickDecrement}
      />
    </div>)
    ;
  }
}
