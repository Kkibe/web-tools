import { useEffect, useState } from 'react'
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
import Loader from './components/Loader';
import AlertAction from './components/AlertAction';


function App() {
  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])
  
  
  useEffect(() => {
    setTimeout(() =>{ setShown(!shown)}, 10000);
  }, [])
  
  useEffect(() => {
    setTimeout(() =>{setShown(!shown)}, 10000);
  }, [shown])

  
  return (
    <div style={{  position: 'relative'}}>
      {
        loading && <Loader />
      }
      {
        !loading && 
        <>
          <Navbar />
          {!shown && <AlertAction />}
          <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='extensions' element={<Store />} />
              <Route path='lighthouse' element={<Lighthouse />} />
              <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </>
      }
    </div>
  )
}

export default App
