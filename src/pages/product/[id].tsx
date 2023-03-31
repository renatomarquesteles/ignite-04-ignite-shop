import { stripe } from '@/src/lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';
import { useShoppingCart } from 'use-shopping-cart';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const { addItem } = useShoppingCart();

  const handleAddToCartClick = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price * 100,
      currency: 'USD',
      image: product.imageUrl,
      price_id: product.defaultPriceId,
    });
  };

  if (isFallback) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>$ {product.price.toFixed(2)}</span>

          <p>{product.description}</p>

          <button onClick={handleAddToCartClick}>Add to Cart</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NZqMRvp3Elq8Id' } }],
    fallback: true,
  };
};

/**
 * Need 1 static page per product
 */
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount! / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
