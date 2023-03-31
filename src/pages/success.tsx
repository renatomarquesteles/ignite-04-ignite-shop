import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import {
  ImageContainer,
  ImagesWrapper,
  SuccessContainer,
} from '../styles/pages/success';

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
  quantity: number;
}

export default function Success({
  customerName,
  products,
  quantity,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Order completed | Ignite Shop</title>

        {/* Tells search engines not to index this page */}
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesWrapper>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesWrapper>

        <h1>Order completed!</h1>

        {products.length === 1 && (
          <p>
            Thank you, <b>{customerName}</b>! The <b>{products[0].name}</b> will
            be shipped to your home soon!
          </p>
        )}

        {products.length > 1 && (
          <p>
            Thank you, <b>{customerName}</b>! Your purchase of {quantity}{' '}
            t-shirts will be shipped to your home soon!
          </p>
        )}

        <Link href="/">Back to catalog </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  const totalQuantity = session.line_items?.data.reduce(
    (acum, item) => acum + (item.quantity || 0),
    0
  );

  return {
    props: {
      customerName,
      products,
      quantity: totalQuantity,
    },
  };
};
