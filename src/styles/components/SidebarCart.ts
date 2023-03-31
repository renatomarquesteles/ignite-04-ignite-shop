import { styled } from '..';

export const SidebarContainer = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  maxWidth: '30rem',
  display: 'flex',
  flexDirection: 'column',
  background: '$gray800',
  transform: 'translateX(110%)',
  transition: 'all 0.2s ease-in-out',

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0%)',
      },
    },
  },

  header: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    button: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
    },
  },
});

export const SidebarContent = styled('div', {
  padding: '0 3rem 3rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  h1: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: '160%',
  },
});

export const ProductsList = styled('ul', {
  margin: '2rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,
  listStyle: 'none',
  maxHeight: 'calc(100vh - 24rem)',
  overflow: 'auto',
});

export const QuantityContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    color: '$gray100',

    '&:last-child': {
      fontSize: '1.125rem',
    },
  },
});

export const TotalPriceContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '0.25rem',

  span: {
    color: '$gray100',
    fontSize: '1.125rem',
    fontWeight: 'bold',

    '&:last-child': {
      fontSize: '1.5rem',
    },
  },
});

export const CheckoutButton = styled('button', {
  width: '100%',
  borderRadius: 8,
  background: '$green500',
  border: 'none',
  padding: '1.25rem 0.5rem',
  textAlign: 'center',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  color: '$white',
  marginTop: '3.4rem',
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
});

export const ProductContainer = styled('li', {
  display: 'flex',
  gap: '1.25rem',
});

export const ProductImageContainer = styled('div', {
  width: '6.25rem',
  height: '5.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  display: 'grid',
  placeItems: 'center',
});

export const ProductBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '1.125rem',
    color: '$gray300',
    lineHeight: '160%',
  },

  span: {
    marginTop: '0.125rem',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    color: '$gray100',
    lineHeight: '160%',
  },
});

export const RemoveButton = styled('button', {
  width: 'fit-content',
  marginTop: '0.5rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '$green500',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s',

  '&:not(:disabled):hover': {
    color: '$green300',
  },
});
