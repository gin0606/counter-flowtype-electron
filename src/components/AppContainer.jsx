// @flow
import React from 'react';

/* eslint-disable react/prefer-stateless-function, react/no-multi-comp */

class Counter extends React.PureComponent {
  props: {
    count: number,
  }
  render() {
    return <p>count: {this.props.count}</p>;
  }
}

class CounterContainer extends React.Component {
  render() {
    return <Counter count={0} />;
  }
}

export default () => (<CounterContainer />);
