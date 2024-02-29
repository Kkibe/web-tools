import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { NavLink} from 'react-router-dom'


export default function Error() {
  return (
    <div className='page'>
        <h4 style={{color: 'red'}}>404 Error</h4>
        <p>Ooops! Can't find this page!</p>
        <NavLink to="/"><FaArrowLeft className='icon'/> Go back</NavLink>
    </div>
  )
}
