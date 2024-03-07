import React from 'react'
import './style.scss'

export default function Post({data}) {
  return (
    <div className="post">
        <img src='https://images.unsplash.com/photo-1477865634015-0b232c1dd56a?dpr=1&auto=format&fit=crop&w=1500&h=2109&q=80&cs=tinysrgb&crop='/>
        <div className="content"> 
          <p className="theme">SEO</p>
          <h2>Misty mountain</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta porro, tempora consequuntur vel dolore assumenda aspernatur cum dignissimos unde reprehenderit sint?</p>
          <a href='#'>Read  </a>
        </div>
    </div>
  )
}
