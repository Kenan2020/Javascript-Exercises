import React from 'react';
import Button from './button.jsx';
import PageNotFound from './images/404.jpg';

const Not_Found = () => {
  return (
    <div className='text-center'>
      <img
        alt='404 page not found'
        src={PageNotFound}
        width='1200'
        height='686'
      ></img>
      <Button
        class='btn btn-outline-primary mx-auto rounded-pill d-block'
        value='Go to Homepage'
      />
    </div>
  );
};

export default Not_Found;
