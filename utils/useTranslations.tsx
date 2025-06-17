"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext<any>(null);

export const useTranslationContext = () => {
  return useContext(TranslationContext);
};

export const useSelectedTranslation = () => {
  const { language, translate } = useTranslationContext();

  return (key: string) => translate(key);

}

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage ? storedLanguage : 'es';
    }
    return 'en';
  });
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationData = await import(`../app/locales/${language}.json`);
        setTranslations(translationData.default); // Acceder al objeto default del módulo importado
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();

    return () => {
      // Cleanup function
    };
  }, [language]);


  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const translate = (key: string) => {
    return translations[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
