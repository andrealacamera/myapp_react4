import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import logo from '../assets/vite.svg';

const Header = () => {
  const {i18n} = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <header className='flex flex-row justify-between items-center bg-violet-800 text-gray-200 text-2xl'>
      <Link to='/' className='flex flex-row items-center'>
        <div className='p-4'>
          <img src={logo} alt="logo" width={120} height={120}/>
        </div>
        <h1 className='text-4xl text-cyan-50'>myapp_react4</h1>
      </Link>
      <nav className='flex flex-row items-center px-8'>
        <ul className='px-8 flex flex-row gap-4'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/page'>Page</Link></li>
        </ul>
        <div className='flex flex-row gap-2 items-center'>
          <button 
            className={`p-1 rounded border ${i18n.language == 'en' ? 'border-gray-200' : 'border-violet-800'}`} 
            onClick={() => handleChangeLanguage('en')}
          >En</button>
          <span>|</span> 
          <button 
            className={`p-1 rounded border ${i18n.language == 'it' ? 'border-gray-200' : 'border-violet-800'}`} 
            onClick={() => handleChangeLanguage('it')}
          >It</button>
        </div>
      </nav>
      
    </header>
  )
}

export default Header