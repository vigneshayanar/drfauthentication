import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password, navigate);
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col p-6 bg-white shadow-md rounded'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" className='mb-4 p-2 border border-gray-300 rounded'
          required />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" className='mb-4 p-2 border border-gray-300 rounded'
          required />
        <button type="submit" className='bg-blue-500 text-white py-2 rounded'>Login</button>
      </form>
    </div>
  );
};

export default Login;
