import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '../lib/stripe';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} alt="" width={520} height={480} />

          <footer>
            <strong>{product.name}</strong>
            <span>$ {product.price.toFixed(2)}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

// Set things on the server side
// Next will only serve a screen to client when everything is done
// Use this only for information that really needs to be displayed when the page loads
// so indexers, crawlers, bots can see it
// Otherwise, we'll have pages that load slowly, which is not a good user experience
// We can also use this function with sensitive information that should not be
// displayed to the client/user like authentication, database etc.
export const getServerSideProps: GetServerSideProps = async () => {
  // Gets products list from Stripe
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    };
  });

  return {
    props: {
      products,
    },
  };
};
