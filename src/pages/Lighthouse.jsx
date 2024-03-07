import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Post from '../components/Post';

export default function Lighthouse() {
  const [blogs, setBlogs] = useState([1, 2, 3]);
  const [report, setReport] = useState(null);
  const [url, setUrl] = useState(null);
  const [web, setWeb] = useState(null);
  const handleAudit = () => {

  }

  useEffect(() => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.Navigator.userAgent)){
        // true for mobile device
        setWeb(false);
      }else{
        // false for not mobile device
        setWeb(true);
      }
  }, []);
  return (
    <div className='page lighthouse'>
        <div className="flyer" >
          <div className="wrapper">
            <h1>Audit Your Page's Performance</h1>
            <h2>Drive the success of your business with SEO tools</h2>
            <NavLink to="extensions">Read more &raquo;</NavLink>
          </div>
        </div>
        <section>
            <h3>Audit Your Page Now!</h3>
            <form onSubmit={handleAudit}>
                <input type='url' name='url' placeholder='https://' title='enter web url' onChange={(e) => setUrl(e.target.value)} required/>
                <button type='submit' title='submit'>Audit</button>
            </form>
        </section>
        {
            report &&         <div class="wrapper">
            <div class="item">
                <span>55%</span>
                <h5>Performance</h5>
            </div>
            <div class="item">
                <span>55%</span>
                <h5>Accessibility</h5>
            </div>
            <div class="item">
                <span>55%</span>
                <h5>Best practices</h5>
            </div>
            <div class="item">
                <span>55%</span>
                <h5>SEO</h5>
            </div>
            <div class="item">
                <span>55%</span>
                <h5>PWA</h5>
            </div>
        </div>
        }

        <div class="container">
            <ul>
                <h2>Mode</h2>
                <li><input type="radio" name="" id=""/>Navigate (Default)</li>
                <li><input type="radio" name="" id=""/>Time span</li>
                <li><input type="radio" name="" id=""/>Snapshot</li>
                </ul>
            <ul>
                <h2>Device</h2>
                  <li><input type="radio" name="device" id="" checked={!web} onChange={() => setWeb(false)}/>Device</li>
                  <li><input type="radio" name="device" id="" checked={web} onChange={() => setWeb(true)}/>Desktop</li>
                <h2>Plugins</h2>
                <li><input type="checkbox" name="" id=""/>Publisher Ads</li>
            </ul>
            <ul>
                <h2>Categories </h2>
                <li><input type="checkbox" name="" id=""/>Performance</li>
                <li><input type="checkbox" name="" id=""/>Accessibility</li>
                <li><input type="checkbox" name="" id=""/>Best Practices</li>
                <li><input type="checkbox" name="" id=""/>SEO</li>
                <li><input type="checkbox" name="" id=""/>Progressive Web App</li>
            </ul>
        </div>
        <h3 style={{textAlign: 'left', marginLeft: '40px'}}>Related Articles 📰</h3>
        <div className="posts">
            {blogs && blogs.map(blog => <Post data={blog} />)}
        </div>
    </div>
  )
}
