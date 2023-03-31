import { Handbag } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../assets/logo.svg';
import {
  CartButton,
  CartCounter,
  HeaderContainer,
} from '../styles/components/Header';

export default function Header() {
  const counter = 1;

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton counter={!!counter} disabled={!counter}>
        <Handbag size={24} weight="bold" />

        {counter > 0 && <CartCounter>{counter}</CartCounter>}
      </CartButton>
    </HeaderContainer>
  );
}
