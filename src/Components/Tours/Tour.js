import React, { useState } from 'react';
import './Tour.css';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <li className='tour'>
      <div className='image'>
        <img src={image} alt='' />
      </div>
      <div className='title-price'>
        <p>{name}</p>
        <p className='price'>{price}$</p>
      </div>
      <p className='info'>
        {readMore ? info : `${info.substring(0, 200)} ...   `}
        <button className='read-more' onClick={() => setReadMore(!readMore)}>
          {readMore ? ' show less' : ' read more'}
        </button>
      </p>
      <div className='push-right'>
        <button className='primary-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </li>
  );
};

export default Tour;
