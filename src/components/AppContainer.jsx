// @flow
import React from 'react';
import Store from 'store/Store';

/* eslint-disable react/prefer-stateless-function, react/no-multi-comp */

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
    return (<div>
      <Counter
        count={this.state.count}
        onClickIncrement={() => {}}
        onClickDecrement={() => {}}
      />
    </div>)
    ;
  }
}

export default () => (<CounterContainer />);
