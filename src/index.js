import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import i18next from 'i18next'
import global_eng from './translaction/Eng/global.json'
import global_uzb from './translaction/Uzb/global.json'
import global_kor from './translaction/Kor/global.json'
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_eng,
    },

    uz: {
      global: global_uzb,
    },

    ko: {
      global: global_kor,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next} >
      <App />
      <ToastContainer/>
    </I18nextProvider>
  </BrowserRouter>
);

