// @flow
import React from 'react';

type Props = {
  count: number,
  onClickIncrement: () => void,
  onClickDecrement: () => void,
};

export default (props: Props) => (
  <div>
    <p>count: {props.count}</p>
    <button onClick={props.onClickIncrement}>+1</button>
    <button onClick={props.onClickDecrement}>-1</button>
  </div>
);
