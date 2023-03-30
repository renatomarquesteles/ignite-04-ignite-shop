import Link from 'next/link';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Order completed!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Nice, <b>[User]</b>! the <b>[Shirt]</b> will be shipped to your home
        soon!
      </p>

      <Link href="/">Back to catalog </Link>
    </SuccessContainer>
  );
}
