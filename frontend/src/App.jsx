import React from 'react';
import './App.css';
import Signup from './Compound/Signup';
import Login from './Compound/Login';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Mainlayout from './Pages/Mainlayout';
import Homepage from './Compound/Homepage';
import { AuthProvider } from './context/AuthContext';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </>
  ));

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
