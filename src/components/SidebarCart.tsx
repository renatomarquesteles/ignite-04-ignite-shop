import { SidebarContainer } from '../styles/components/SidebarCart';

interface SidebarCartProps {
  isOpen: boolean;
  close: () => void;
}

export default function SidebarCart({ isOpen, close }: SidebarCartProps) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <h1>SidebarCart</h1>
      <button onClick={close}>X</button>
    </SidebarContainer>
  );
}
