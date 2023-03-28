import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product';
import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Shirt X</h1>
        <span>$ 19.90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque in
          placeat velit debitis fuga reiciendis ab, aut explicabo deserunt
          quisquam esse at et! Eius laboriosam reprehenderit voluptatem at
          inventore quis?
        </p>

        <button>Order now</button>
      </ProductDetails>
    </ProductContainer>
  );
}
