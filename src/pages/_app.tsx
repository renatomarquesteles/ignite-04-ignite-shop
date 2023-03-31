import type { AppProps } from 'next/app';
import { useState } from 'react';
import { CartProvider } from 'use-shopping-cart';

import Header from '../components/Header';
import SidebarCart from '../components/SidebarCart';
import { globalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';

globalStyles();

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
      stripe={process.env.STRIPE_PUBLIC_KEY!}
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
