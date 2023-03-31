import { CircleNotch, X } from '@phosphor-icons/react';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import {
  CheckoutButton,
  ProductBody,
  ProductContainer,
  ProductImageContainer,
  ProductImageCounter,
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
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const {
    cartDetails,
    cartCount,
    totalPrice,
    decrementItem,
    clearCart,
    redirectToCheckout,
  } = useShoppingCart();

  const products = Object.values(cartDetails || {});

  const handleRemoveClick = (id: string) => {
    decrementItem(id);
  };

  const handleCheckoutClick = async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        items: cartDetails,
      });

      const { checkoutSessionId } = response.data;

      clearCart();

      await redirectToCheckout(checkoutSessionId!);
    } catch (err) {
      // Should connect to an error watching tool (Datadog / Sentry)

      console.error(err);
      alert('Checkout redirect failed');
    } finally {
      setIsCreatingCheckoutSession(false);
    }
  };

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
                {product.quantity > 1 && (
                  <ProductImageCounter>{product.quantity}</ProductImageCounter>
                )}
              </ProductImageContainer>

              <ProductBody>
                <p>
                  {product.quantity > 1 && product.quantity + 'x '}
                  {product.name}
                </p>

                <span>$ {(product.value / 100).toFixed(2)}</span>

                <RemoveButton onClick={() => handleRemoveClick(product.id)}>
                  Remove
                </RemoveButton>
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
            <span>$ {(totalPrice! / 100).toFixed(2)}</span>
          </TotalPriceContainer>

          <CheckoutButton
            onClick={handleCheckoutClick}
            disabled={products.length === 0 || isCreatingCheckoutSession}
          >
            {isCreatingCheckoutSession ? (
              <CircleNotch size={22} weight="bold" />
            ) : (
              'Checkout'
            )}
          </CheckoutButton>
        </footer>
      </SidebarContent>
    </SidebarContainer>
  );
}
