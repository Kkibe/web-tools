import React from 'react'
import Category from '../components/Category'
import FeaturedExtension from '../components/FeaturedExtension'
import { extensions } from '../data/extensions';
import { FaCode, FaGamepad, FaPen, FaTools } from 'react-icons/fa';
import Extension from '../components/Extension';
import Ad from '../components/Ad';
import FeaturedAd from '../components/FeaturedAd';
import Post from '../components/Post';

export default function Store() {
  return (
    <div className='page'>
        <div className="featured"></div>
        <div className="categories">
        <Category data= {{name: "Tools", icon: <FaTools className='icon'/>}}/>
          <Category data= {{name: "Games", icon: <FaGamepad className='icon'/>}}/>
          <Category data= {{name: "Art & Design", icon: <FaPen className='icon'/>}}/>
          <Category data= {{name: "Developer", icon: <FaCode className='icon'/>}}/>
        </div>
        <h3 style={{textAlign: 'left', marginLeft: '40px'}}>Featured Plugins</h3>
        <div className="featured">
          {
            extensions.map(data =>{
              if(data.featuredAd){
                return <FeaturedAd data = {data} key={data.id}/>
              }
              return data.featured && <FeaturedExtension data = {data} key={data.id}/>
            })
          }
        </div>

        
        <h3 style={{textAlign: 'left', marginLeft: '40px'}}>Explore</h3>
        <div className="extensions">
          {
            extensions.map(data =>{
              if(data.ad){
                return <Ad data = {data} key={data.id}/>
              }
              return <Extension data = {data} key={data.id}/>
            })
          }
        </div>

        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    </div>
  )
}
