import React, {useEffect} from 'react';
import AppRouter from './components/utils/AppRouter';
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset : 100 });
  },[])

  return (
    <>
    
      <div className='bg-[#e0f2fe] overflow-hidden'>
        <Navbar />
        <div className='max-w-7xl mx-auto px-6'>
          <AppRouter />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
