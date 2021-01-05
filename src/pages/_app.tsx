import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
