import React from 'react';
import './style.scss';
import { FaChrome, FaFirefox, FaOpera } from "react-icons/fa";

export default function FeaturedExtension({data}) {
  return (
    <div className='featuredExtension'>
        <img src={data.image}
        alt={`plugin-${data.browser}`} />
        <div className="wrapper">
          <h3>{data.name}</h3>
          <div className="bottom">
            <div className="users">
              <span/>{data.users}k users
            </div>
            <div className="platform">
              {
                data.browser == 'chrome' && <FaChrome className='icon' style={{color: '#007FFF'}}/>
              }
              {
                data.browser == 'firefox' && <FaFirefox className='icon' style={{color: '#8A2BE2'}}/>
              }
              {
                data.browser == 'opera' && <FaOpera className='icon' style={{color: 'red'}}/>
              }
               <span>{data.browser}</span>
            </div>
          </div>
        </div>
    </div>
  )
}
