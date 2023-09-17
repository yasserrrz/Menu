import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './assets/i18n/en.json';
import ar from './assets/i18n/ar.json';

  
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ar: ar,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
  
export default i18n;