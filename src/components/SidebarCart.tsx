import { X } from '@phosphor-icons/react';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';

import {
  CheckoutButton,
  ProductBody,
  ProductContainer,
  ProductImageContainer,
  ProductsList,
  QuantityContainer,
  RemoveButton,
  SidebarContainer,
  SidebarContent,
  TotalPriceContainer,
} from '../styles/components/SidebarCart';

interface SidebarCartProps {
  isOpen: boolean;
  close: () => void;
}

export default function SidebarCart({ isOpen, close }: SidebarCartProps) {
  const { cartDetails, cartCount, totalPrice } = useShoppingCart();

  const products = Object.values(cartDetails || {});

  return (
    <SidebarContainer isOpen={isOpen}>
      <header>
        <button onClick={close}>
          <X weight="bold" size="1.5rem" color="#8D8D99" />
        </button>
      </header>

      <SidebarContent>
        <h1>Shopping Bag</h1>

        <ProductsList>
          {products.map((product) => (
            <ProductContainer key={product.id}>
              <ProductImageContainer>
                {product.image && (
                  <Image src={product.image} width={94} height={94} alt="" />
                )}
              </ProductImageContainer>

              <ProductBody>
                <p>
                  {product.quantity > 1 && product.quantity + 'x '}
                  {product.name}
                </p>

                <span>$ {product.value.toFixed(2)}</span>

                <RemoveButton>Remove</RemoveButton>
              </ProductBody>
            </ProductContainer>
          ))}
        </ProductsList>

        <footer>
          <QuantityContainer>
            <span>Quantity</span>
            <span>
              {cartCount} item{cartCount! > 1 && 's'}
            </span>
          </QuantityContainer>

          <TotalPriceContainer>
            <span>Total price</span>
            <span>$ {totalPrice!.toFixed(2)}</span>
          </TotalPriceContainer>

          <CheckoutButton disabled={products.length === 0}>
            Checkout
          </CheckoutButton>
        </footer>
      </SidebarContent>
    </SidebarContainer>
  );
}
