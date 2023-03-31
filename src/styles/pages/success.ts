import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '4rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  display: 'grid',
  placeItems: 'center',

  img: {
    objectFit: 'cover',
  },
});

export const ImagesWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginLeft: '3.5rem',

  div: {
    marginLeft: '-3.5rem',
    boxShadow: '0 0 3.5rem 0 rgba(0, 0, 0, 0.5)',
  },
});
