import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import Patreon from '../assets/paetron.png';

export default function AlertAction() {
  return (
  <div className='alert-action'>
    <img src={Patreon} />
    <div>
        <h3 style={{textAlign: 'left', marginLeft: '40px'}}>Patreon</h3>
        <p>Sponsor the creator, Web Tools</p>
    </div>
    <NavLink to={""}>Sponsor</NavLink>
  </div>
  )
}
