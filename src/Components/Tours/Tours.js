import React from 'react';
import useFetchTours from '../Hooks/useFetchTours';
import Tour from './Tour';
import './Tours.css';

const Tours = () => {
  const { tours, removeTour, call } = useFetchTours();

  if (tours.length === 0) {
    return (
      <div className='no-data'>
        <h1>There is no element to show</h1>
        <button className='primary-btn' onClick={call}>
          Bring Tours
        </button>
      </div>
    );
  }

  return (
    <ul className='tours'>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </ul>
  );
};

export default Tours;
