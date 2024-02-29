import { useState } from 'react'
import Home from './pages/Home'
import Store from './pages/Store';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {
  Routes,
  Route,
} from "react-router-dom";
import Lighthouse from './pages/Lighthouse';
import Error from './pages/Error';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div style={{  position: 'relative'}}>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='extensions' element={<Store />} />
          <Route path='lighthouse' element={<Lighthouse />} />
          <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
