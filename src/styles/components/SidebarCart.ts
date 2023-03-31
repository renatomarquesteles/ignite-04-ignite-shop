import { styled } from '..';

export const SidebarContainer = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  maxWidth: '30rem',
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
});
