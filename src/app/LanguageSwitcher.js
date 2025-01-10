// src/app/LanguageSwitcher.js
'use client'

import { useTranslation } from 'react-i18next';
import '../i18n'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Get the i18n instance for changing language

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language when a button is clicked
  };

  return (
    <div className='text-center'>
      <button className='text-2xl m-1 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('en')}>English</button>
      <button className='text-2xl m-1 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
