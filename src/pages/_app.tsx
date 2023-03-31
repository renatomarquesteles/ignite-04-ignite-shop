import type { AppProps } from 'next/app';
import { useState } from 'react';
import { CartProvider } from 'use-shopping-cart';

import Header from '../components/Header';
import SidebarCart from '../components/SidebarCart';
import { globalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';

globalStyles();

const stripePublicKey =
  'pk_test_51MogYcETH3SvuMRe7L5UQIAMpp99VzJD5hKR3QlDoABzvNk0CMW0Bb5er1MjHWIgK22JfjDXx07nGh9xEL13aRsN00mUPgt0t9';

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripePublicKey}
      currency="USD"
      shouldPersist
    >
      <Container>
        <Header showSidebar={showSidebar} />
        <Component {...pageProps} />

        <SidebarCart isOpen={isSidebarOpen} close={closeSidebar} />
      </Container>
    </CartProvider>
  );
}
