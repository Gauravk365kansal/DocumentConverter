import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='nav'>
<Link to='/' className='site'>
Home
</Link>
<ul>
    <li className='active'>
        <Link to='/pricing'>pricing</Link>
    </li>
    <li>
        <Link to='/about'>About</Link>
    </li>
</ul>

      </nav>
    </div>
  )
}

export default Navbar
