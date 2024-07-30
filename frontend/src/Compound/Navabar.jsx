import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className='flex bg-white text-black shadow-xl h-16 items-center justify-between px-4 p-5'>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='text-black text-xl font-bold'>Minework</div>
        </Link>
      </div>
      <div className='flex space-x-4 items-center'>
        {!isAuthenticated ? (
          <>
            <Link to='/signup'>
              <div className='text-black text-xl font-bold'>Signup</div>
            </Link>
            <Link to='/login'>
              <div className='text-black text-xl font-bold'>Login</div>
            </Link>
          </>
        ) : (
          <Link to='/'>
            <div className='text-black text-xl font-bold' onClick={logout}>Logout</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
