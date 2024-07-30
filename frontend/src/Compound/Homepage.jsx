import React, { useContext, useEffect, useState } from 'react';
import clim from '../assets/c1.jpeg'; // Ensure this path is correct
import { AuthContext } from '../context/AuthContext';

const Homepage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(data => setQuotes(data.quotes))
      .catch(err => setError('Failed to fetch quotes.'));
  }, []);

  // Get a random quote
  const getRandomQuote = () => {
    if (quotes.length === 0) return '';
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex]?.quote || '';
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${clim})` }}>
        <div className='flex justify-center items-center min-h-screen opacity-70 '>
          {isAuthenticated ? (
            quotes.length > 0 ? (
              <div className=' bg-white font-bold text-2xl text-black uppercase'>
               <h1 className='text-black'> Quotes of the day is: {getRandomQuote()}</h1>
              </div>
            ) : (
              <div className='text-white shadow-md'>{error ? error : 'Loading quotes...'}</div>
            )
          ) : (
            <div className='bg-white font-bold text-2xl text-black uppercase'>You need to log in to continue.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
