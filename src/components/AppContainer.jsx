// @flow
import React from 'react';
import Store from 'store/Store';
import dispatcher from 'dispatcher';

/* eslint-disable react/prefer-stateless-function, react/no-multi-comp, class-methods-use-this */

class Counter extends React.PureComponent {
  props: {
    count: number,
    onClickIncrement: () => void,
    onClickDecrement: () => void,
  }
  render() {
    return (<div>
      <p>count: {this.props.count}</p>
      <button onClick={this.props.onClickIncrement}>+1</button>
      <button onClick={this.props.onClickDecrement}>-1</button>
    </div>);
  }
}

class CounterContainer extends React.Component {
  state: {
    count: number,
  }
  onChange: () => void
  onClickIncrement: () => void
  onClickDecrement: () => void

  constructor(...args) {
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
    dispatcher.dispatch({ type: 'increment', count: 1 });
  }

  onClickDecrement() {
    dispatcher.dispatch({ type: 'decrement', count: 1 });
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

export default () => (<CounterContainer />);
