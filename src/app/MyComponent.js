// src/app/MyComponent.js
'use client'

import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>{t('welcome')}</h1>
      <button className='text-2xl m-1 p-1 hover:bg-red-600 hover:text-black'>{t('login')}</button>
      <button className='text-2xl m-1 p-1 hover:bg-red-600 hover:text-black'>{t('logout')}</button>
    </div>
  );
};

export default MyComponent;
