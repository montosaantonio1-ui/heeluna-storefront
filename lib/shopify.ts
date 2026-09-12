import type { Cart, Product } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2024-10";

const endpoint = domain
  ? `https://${domain}/api/${apiVersion}/graphql.json`
  : null;

/**
 * Thin fetch wrapper around the Shopify Storefront API.
 *
 * Only ever uses the Storefront API token (public, read + cart/checkout
 * scope). The Admin API token has no place in this client-reachable code —
 * if you later need Admin-only data (order lookups, inventory writes),
 * do that in a separate server-only module and never expose that token
 * to the client bundle.
 */
async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  { cache = "force-cache" as RequestCache, revalidate }: { cache?: RequestCache; revalidate?: number } = {}
): Promise<T> {
  if (!endpoint || !token) {
    throw new Error(
      "Missing SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_ACCESS_TOKEN. Copy .env.local.example to .env.local and fill them in."
    );
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    ...(revalidate !== undefined ? { next: { revalidate } } : { cache }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(
      `Shopify Storefront API error: ${json.errors.map((e: { message: string }) => e.message).join(", ")}`
    );
  }

  return json.data as T;
}

const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    descriptionHtml
    options {
      name
      values
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 25) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`;

function normalizeProduct(node: any): Product {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    descriptionHtml: node.descriptionHtml,
    options: node.options,
    images: node.images.edges.map((e: any) => e.node),
    priceRange: node.priceRange,
    variants: node.variants.edges.map((e: any) => e.node),
  };
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const query = /* GraphQL */ `
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        ...ProductFields
      }
    }
    ${PRODUCT_FRAGMENT}
  `;

  const data = await shopifyFetch<{ product: any }>(
    query,
    { handle },
    { cache: "no-store" }
  );

  return data.product ? normalizeProduct(data.product) : null;
}

const CART_FRAGMENT = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              product {
                title
                handle
              }
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

function normalizeCart(node: any): Cart {
  return {
    id: node.id,
    checkoutUrl: node.checkoutUrl,
    totalQuantity: node.totalQuantity,
    cost: node.cost,
    lines: node.lines.edges.map((e: any) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      merchandise: e.node.merchandise,
    })),
  };
}

export async function createCart(merchandiseId: string, quantity = 1): Promise<Cart> {
  const query = /* GraphQL */ `
    mutation CartCreate($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart {
          ...CartFields
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `;

  const data = await shopifyFetch<{ cartCreate: { cart: any; userErrors: any[] } }>(
    query,
    { lines: [{ merchandiseId, quantity }] },
    { cache: "no-store" }
  );

  if (data.cartCreate.userErrors?.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartCreate.cart);
}

export async function addCartLine(cartId: string, merchandiseId: string, quantity = 1): Promise<Cart> {
  const query = /* GraphQL */ `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFields
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `;

  const data = await shopifyFetch<{ cartLinesAdd: { cart: any; userErrors: any[] } }>(
    query,
    { cartId, lines: [{ merchandiseId, quantity }] },
    { cache: "no-store" }
  );

  if (data.cartLinesAdd.userErrors?.length) {
    throw new Error(data.cartLinesAdd.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const query = /* GraphQL */ `
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFields
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `;

  const data = await shopifyFetch<{ cartLinesUpdate: { cart: any; userErrors: any[] } }>(
    query,
    { cartId, lines: [{ id: lineId, quantity }] },
    { cache: "no-store" }
  );

  if (data.cartLinesUpdate.userErrors?.length) {
    throw new Error(data.cartLinesUpdate.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function removeCartLine(cartId: string, lineId: string): Promise<Cart> {
  const query = /* GraphQL */ `
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ...CartFields
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `;

  const data = await shopifyFetch<{ cartLinesRemove: { cart: any; userErrors: any[] } }>(
    query,
    { cartId, lineIds: [lineId] },
    { cache: "no-store" }
  );

  if (data.cartLinesRemove.userErrors?.length) {
    throw new Error(data.cartLinesRemove.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesRemove.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const query = /* GraphQL */ `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        ...CartFields
      }
    }
    ${CART_FRAGMENT}
  `;

  const data = await shopifyFetch<{ cart: any }>(query, { cartId }, { cache: "no-store" });
  return data.cart ? normalizeCart(data.cart) : null;
}
