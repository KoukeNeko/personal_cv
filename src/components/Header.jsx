import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {

  const [selected, setSelected] = React.useState('Home')
  console.log(selected)
  return (
    <nav className="Header">
        <div className='Nav--bar'>
            <Link to="/"><span onClick={()=>setSelected('Home')} className={selected === "Home" ? "nav--title nav--title--selected" : "nav--title"}>Home</span></Link>
            <Link to="/Contact"><span onClick={()=>setSelected('About')} className={selected === "About" ? "nav--title nav--title--selected" : "nav--title"}>About</span></Link>
            <Link to="/Experience"><span onClick={()=>setSelected('Experience')} className={selected === "Experience" ? "nav--title nav--title--selected" : "nav--title"}>Experience</span></Link>
            <Link to="/Contact"><span onClick={()=>setSelected('Contact')} className={selected === "Contact" ? "nav--title nav--title--selected" : "nav--title"}>Contact</span></Link>
        </div>
    </nav>
  )
}

export default Header