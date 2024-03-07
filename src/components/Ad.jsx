import React from 'react'
import { FaAd, FaInfo} from 'react-icons/fa'
import './style.scss'

export default function Ad({data}) {
  return (
    <a href='https://chromewebstore.google.com/detail/cookie-clearer/onjeopegpkgkdabckfjdilnajmceigdk' target='_blank' className='extension'>
        <img src={data.image}
        alt={`plugin-${data.browser}`} />
        <div className="wrapper">
          <h3>{data.name}</h3>
          <div className="bottom">
            <div className="users">
            <a href="/#" style={{color: '#007FFF', fontSize: '10px'}}><FaInfo className='icon' />open</a>
            </div>
            <div className="platform">
                { <FaAd className='icon isAd' style={{color: '#007FFF'}}/>}
               <span>web store</span>
            </div>
          </div> 
        </div>
    </a>
  )
}
