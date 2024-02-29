import React from 'react'
import './style.scss'
import { FaGithub, FaShareAlt } from 'react-icons/fa'
import { NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="top">
        <h1 className="icon">Web Tools</h1>
         
      </div>
      <div className="bottom">
        <nav>
          <NavLink to="/" className='active'>Discover</NavLink>
          <NavLink to="/extensions">Extensions</NavLink>
          <NavLink to="/lighthouse">Lighthouse</NavLink>
        </nav>
        <a href="https://github.com/Kkibe/web-tools" className='fa-share' target='_blank'><FaGithub  /></a>
      </div>
    </div>
  )
}
