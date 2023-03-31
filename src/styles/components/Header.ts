import { styled } from '..';

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CartButton = styled('button', {
  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
  position: 'relative',

  variants: {
    counter: {
      true: {
        svg: {
          fill: '$gray300',
        },
      },
      false: {
        svg: {
          fill: '#8D8D99',
        },
      },
    },
  },
});

export const CartCounter = styled('div', {
  position: 'absolute',
  top: '-0.5rem',
  right: '-0.5rem',
  width: '1.6875rem',
  height: '1.6875rem',
  display: 'grid',
  placeItems: 'center',
  background: '$green500',
  color: '$white',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  border: '0.1875rem solid $gray900',
  borderRadius: 1000,
});
