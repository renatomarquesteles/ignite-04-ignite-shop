import { X } from '@phosphor-icons/react';

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
  const products = [1, 2, 3];

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
            <ProductContainer key={product}>
              <ProductImageContainer></ProductImageContainer>
              <ProductBody>
                <p>Beyond the Limits T-Shirt</p>
                <span>$ 19.90</span>
                <RemoveButton>Remove</RemoveButton>
              </ProductBody>
            </ProductContainer>
          ))}
        </ProductsList>

        <footer>
          <QuantityContainer>
            <span>Quantity</span>
            <span>3 items</span>
          </QuantityContainer>

          <TotalPriceContainer>
            <span>Total price</span>
            <span>$ 120.00</span>
          </TotalPriceContainer>

          <CheckoutButton disabled={products.length === 0}>
            Checkout
          </CheckoutButton>
        </footer>
      </SidebarContent>
    </SidebarContainer>
  );
}
