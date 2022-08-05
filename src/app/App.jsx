import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Page from '../pages/Page';



function App() { 
    
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/page' element={ <Page /> } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
