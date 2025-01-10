// src/app/page.js
'use client'

import { useTranslation } from 'react-i18next';
import MyComponent from './MyComponent';
import LanguageSwitcher from './LanguageSwitcher';

const Page = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div>
      <MyComponent />
      <LanguageSwitcher />
    </div>
  );
};

export default Page;
