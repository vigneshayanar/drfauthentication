import React from 'react'
import Navabar from '../Compound/Navabar'
import { Outlet, Link } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div>
        <Navabar/>
        <Outlet />
    </div>
  )
}

export default Mainlayout