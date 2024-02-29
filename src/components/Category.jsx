import React from 'react'
import './style.scss';
import { FaTools } from "react-icons/fa";

export default function Category({data}) {
  return (
    <a href='https://chromewebstore.google.com/detail/cookie-clearer/onjeopegpkgkdabckfjdilnajmceigdk' target='_blank' className='category'>
        <h4 className='title' title={data.name}>{data.name}</h4>
        {data.icon}
    </a>
  )
}
