import { useState, useEffect } from 'react';
const useFetchTours = () => {
  const [tours, setTours] = useState([]);

  const call = async () => {
    try {
      const res = await fetch('https://course-api.com/react-tours-project');
      const tours = await res.json();
      setTours(tours);
    } catch (err) {
      // setError('Something went wrong');
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    call();
  }, []);

  return {
    tours,
    removeTour,
    call,
  };
};

export default useFetchTours;
