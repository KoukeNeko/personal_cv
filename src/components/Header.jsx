import React from 'react'

function Header() {
  return (
    <nav className="Header">
        <div className='Nav--bar'>
            <a href="#about" className='nav--title nav--title--selected'>About</a>
            <a href="#about" className='nav--title'>Experience</a>
            <a href="#about" className='nav--title'>Contact</a>
        </div>
    </nav>
  )
}

export default Header