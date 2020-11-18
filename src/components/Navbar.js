import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <div className='d-flex justify-content-around p-4'>
      <Link className='btn btn-light m-2' to='/randomizer-wdft'>Home</Link>
      <Link className='btn btn-light m-2' to='/randomizer-wdft/random'>Randomizer</Link>
      <Link className='btn btn-light m-2' to='/randomizer-wdft/pairs'>Pairs Generator</Link>
      <Link className='btn btn-light m-2' to='/randomizer-wdft/random-order'>Random Order</Link>
      <Link className='btn btn-light m-2' to='/randomizer-wdft/heads-or-tails'>Heads or Tails</Link>
      
    </div>
  );
}
 
export default Navbar;