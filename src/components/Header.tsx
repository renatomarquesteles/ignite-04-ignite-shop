import { Handbag } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

import logoImg from '../assets/logo.svg';
import {
  CartButton,
  CartCounter,
  HeaderContainer,
} from '../styles/components/Header';

interface HeaderProps {
  showSidebar: () => void;
}

export default function Header({ showSidebar }: HeaderProps) {
  const { cartCount } = useShoppingCart();
  const counter = cartCount || 0;

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton onClick={showSidebar} counter={!!counter} disabled={!counter}>
        <Handbag size={24} weight="bold" />

        {counter > 0 && <CartCounter>{counter}</CartCounter>}
      </CartButton>
    </HeaderContainer>
  );
}
