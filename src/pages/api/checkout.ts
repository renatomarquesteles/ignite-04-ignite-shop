import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from 'use-shopping-cart/core';

import { stripe } from '../../lib/stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Request method not allowed' });
  }

  const { items } = req.body;

  if (!items) {
    return res.status(400).json({ error: 'Cart items not found' });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const products: Product[] = Object.values(items);

  const lineItems = products.map((product) => ({
    price: product.price_id,
    quantity: product.quantity,
  }));

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json({
    checkoutSessionId: checkoutSession.id,
  });
}
