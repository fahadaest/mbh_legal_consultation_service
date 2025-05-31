'use client';

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DM_Sans, Cairo } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store';
import { IntlProvider } from 'next-intl';
import Cookies from 'js-cookie';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dm-sans',
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-cairo',
});

export default function RootLayout({ children }) {
  const language = Cookies.get('language') || 'EN';
  const locale = language.toLowerCase();
  const fontClass = locale === 'ar' ? cairo.variable : dmSans.variable;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  let messages;
  try {
    messages = require(`../locales/${locale}.json`);
  } catch {
    messages = require(`../locales/en.json`);
  }

  return (
    <html lang={locale} dir={direction} className={fontClass}>
      <body className="font-sans">
        <Provider store={store}>
          <IntlProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </IntlProvider>
        </Provider>
      </body>
    </html>
  );
}