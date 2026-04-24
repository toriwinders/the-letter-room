import "server-only";

import Stripe from "stripe";

export function createStripeServerClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing environment variable: STRIPE_SECRET_KEY");
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-06-30.basil",
  });
}

export function getStripeWebhookSecret() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("Missing environment variable: STRIPE_WEBHOOK_SECRET");
  }

  return webhookSecret;
}
