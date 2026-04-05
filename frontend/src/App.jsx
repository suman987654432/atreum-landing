
import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div className='font-canela min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1'>
        <LandingPage/>
      </div>
      <Footer />
    </div>
  );
}

export default App;