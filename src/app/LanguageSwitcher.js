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
    <div className='text-center grid grid-cols-3'>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('en')}>English</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('hi')}>Hindi</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('ar')}>Arabic</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('es')}>Spanish</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('de')}>German</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('zh')}>Mandarin Chinese</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('ru')}>Russian</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('it')}>Italian</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('fr')}>French</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('pt')}>Portuguese</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('mr')}>Marathi</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('bn')}>Bengali</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('ne')}>Nepali</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('kn')}>Kannada</button>
      <button className='text-2xl m-3 p-2 bg-slate-600 text-black hover:bg-black hover:text-white transition-all duration-300 rounded' onClick={() => handleLanguageChange('ta')}>Tamil</button>
    </div>
  );
};

export default LanguageSwitcher;
