import { FaChrome, FaFirefox, FaOpera } from "react-icons/fa";
import Adblocker from '../assets/Adblocker.png';
import AllCalculator from '../assets/all-calculator.png';
import CalculatorPro from '../assets/calculator-pro.png';
import Podcast from '../assets/podcast.png';
import LearnDiabetesAd from '../assets/learn-diabetes.png'
import Ql from '../assets/ql-downloader.png';
import Qr from '../assets/qr.png';
import CookieClearer from '../assets/cookie_clearer.png';
import LearnWeb from '../assets/learn-web.png';
import DevSandbox from '../assets/developer-sandbox.png';
import Coongames from '../assets/coongames.png'

export  const extensions = [
    {
        id: 1,
        name: "Ad blocker",
        image: Adblocker,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        users: 1.2,
        url: "http://",
        featured: false,
        
    },
    {
        id: 5,
        name: "Advanced sticky notes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaOpera className='icon'/>`,
        browser: "opera",
        users: 1.2,
        url: "http://",
        featured: false,
    },
    {
        id: 4,
        name: "Advanced to-do list",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaOpera className='icon'/>`,
        browser: "opera",
        users: 1.2,
        url: "http://",
        featured: false,
    },
    {
        id: 2,
        name: "All Calculator",
        image: AllCalculator,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaFirefox className='icon'/>`,
        browser: "firefox",
        users: 1.2,
        url: "http://",
        featured: false,
    },
    {
        id: 3,
        name: "Alarm clock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaFirefox className='icon'/>`,
        browser: "firefox",
        users: 1.2,
        url: "http://",
        featured: false,
    },
    {
        id: 6,
        name: "Calculator Pro",
        image: CalculatorPro,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaOpera className='icon'/>`,
        browser: "opera",
        featured: true,
    },
    {
        id: 22,
        name: "Canvas Drawer",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 9,
        name: "Coongames play games",
        image: Coongames,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        users: 1.2,
        url: "http://",
        featured: true,
    },
    {
        id: 13,
        name: "Cookie manager for chrome",
        image: CookieClearer,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        users: 1.2,
        url: "http://",
        featured: false,
        ad: true,
    },
    {
        id: 24,
        name: "Currency converter",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 15,
        name: "Dark mode",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    },
    {
        id: 30,
        name: "Describe it dictionary",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 21,
        name: "Expense tracker",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 26,
        name: "Language translator",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 7,
        name: "Learn About Diabetes.",
        image: LearnDiabetesAd,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "play",
        users: 1.2,
        url: "http://",
        featuredAd: true,
    },
    {
        id: 14,
        name: "Learn web development online",
        image: LearnWeb,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featuredAd: true,
    
    },
    {
        id: 16,
        name: "Neon theme",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        users: 1.2,
        url: "http://",
        featured: false,
    },
    {
        id: 12,
        name: "Password generator",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaFirefox className='icon'/>`,
        browser: "firefox",
        featured: true,
    },
    {
        id: 29,
        name: "Plagiarism checker",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 19,
        name: "QL all video downloader",
        image: Ql,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 11,
        name: "Qr generator & scanner",
        image: Qr,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        users: 1.2,
        url: "http://",
        featured: true,
    },
    {
        id: 10,
        name: "Resume builder",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaFirefox className='icon'/>`,
        browser: "firefox",
        users: 1.2,
        url: "http://",
        featured: false,
    },
    {
        id: 25,
        name: "Typing speed checker",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 27,
        name: "Text to speech",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 17,
        name: "Url shortener",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAArxiD9gFO1hQoRHwjkWVUMX3FORuOygFmO0CPQvgBhqrApOGR5h9UVuZJzmT194dnf8&usqp=CAU",
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 18,
        name: "Web developer sandbox",
        image: DevSandbox,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    
    {
        id: 28,
        name: "Word counter",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 23,
        name: "Expense tracker",
        image: Podcast,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        featured: false,
    
    },
    {
        id: 8,
        name: "... for chrome",
        image: CookieClearer,
        description: "Lorem ipsum dolo sit amet.",
        platform: `<FaChrome className='icon'/>`,
        browser: "chrome",
        users: 1.2,
        url: "http://",
        featured: false,
    },


]
