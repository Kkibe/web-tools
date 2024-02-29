import React from 'react'
import './style.scss';
import FeaturedExtension from '../components/FeaturedExtension'
import Category from '../components/Category'
import Extension from '../components/Extension'
import Faq from '../components/Faq';
import { extensions } from '../data/extensions';
import Ad from '../components/Ad';
import FeaturedAd from '../components/FeaturedAd';
import Newsletter from '../components/Newsletter';
import { FaCode, FaGamepad, FaPen, FaTools } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Post from '../components/Post';

export default function Home() {
  return (
    <div className='page'>
        <div className="flyer">
          <div className="wrapper">
            <h1>Eclipse your browser</h1>
            <h2>Dim the lights with dark mode selection</h2>
            <NavLink to="extensions">Discover Collection</NavLink>
          </div>
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
        <div className="categories">
          <Category data= {{name: "Tools", icon: <FaTools className='icon'/>}}/>
          <Category data= {{name: "Games", icon: <FaGamepad className='icon'/>}}/>
          <Category data= {{name: "Art & Design", icon: <FaPen className='icon'/>}}/>
          <Category data= {{name: "Developer", icon: <FaCode className='icon'/>}}/>
        </div>
        <h3 style={{textAlign: 'left', marginLeft: '40px'}}>Explore Our Store</h3>
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
        <h3>Frequently Asked Questions</h3>
        <div className="faqs-container" id='faq'>
          <Faq />
          <Faq />
          <Faq />
          <Faq />
        </div>
        <Newsletter />
        <h3 style={{textAlign: 'left', marginLeft: '40px'}}>Trending</h3>
        <div className="posts">
          <Post />
          <Post />
          <Post />
        </div>
    </div>
  )
}
