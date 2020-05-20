import React from 'react';

const Button = ({ clickHandler, className, value }) => {
  return (
    <button onClick={clickHandler} className={className}>
      {value}
    </button>
  );
};

export default Button;
