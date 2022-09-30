import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}

export default MyApp;
