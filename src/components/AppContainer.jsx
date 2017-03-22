// @flow
import React from 'react';
import Store from 'store/Store';

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
  state: {
    count: number,
  }
  onChange: () => void

  constructor(...args) {
    super(...args);

    this.state = {
      count: Store.getCount(),
    };

    this.onChange = this.onChange.bind(this);
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

  render() {
    return <Counter count={this.state.count} />;
  }
}

export default () => (<CounterContainer />);
