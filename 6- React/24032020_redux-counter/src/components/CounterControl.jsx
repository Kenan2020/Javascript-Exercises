import React from 'react';

const CounterControl = props => {
  return (
    <div className='counterControl' onClick={props.clickHandler}>
      {props.label}
    </div>
  );
};

export default CounterControl;
